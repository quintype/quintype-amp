import React from "react";
import { CommonTemplateTypes } from "../common-template-types";
import {
  Layout,
  StoryElement,
  Spacer,
  LiveList,
  IncompatibleBanner,
  Footer,
  GoogleTagManager,
  GoogleAnalytics,
  QuintypeAnalytics,
  ComScore,
  ChartBeat,
  InfiniteScroll
} from "../../atoms";
import { HeaderCard, Navbar, AmpAds, Slots, RelatedStories, WebEngage } from "../../molecules";
import { StoryContainer, Wrapper } from "./presentational-components";
import { CardUpdatedAt } from "./container-components";
import get from "lodash.get";

const { TopAd, BottomAd, BodyAd } = AmpAds;
const { StoryPageSlots } = Slots;
const { TopSlot, BottomSlot, LiveBlogCardSlot } = StoryPageSlots;

/**
 * The LiveBlog is the default template for live blog type stories.
 *
 * Slots: top-slot, bottom-slot, live-blog-card-slot
 *
 * renders: In addition to all renders offered by the generic story template, live blog offers the following renders:
 *  - liveBlogCardTimeStamp
 *
 * featureConfig: In addition to all feature configs provided by generic story template, live blog accepts following feature configs. They can be accessed via opts.featureConfig.liveBlog
 *  - dataPollInterval: sets the data-poll-interval attr on <amp-live-list />
 *  - dataMaxItemsPerPage: sets the data-max-items-per-page attr on <amp-live-list />
 *
 * @category Default Templates
 * @component
 */
export const LiveBlog = ({ story, config }: CommonTemplateTypes) => {
  const footerText = get(config, ["publisherConfig", "publisher-settings", "copyright"], null);
  const infiniteScrollInlineConfig = get(
    config,
    ["opts", "featureConfig", "infiniteScroll", "infiniteScrollInlineConfig"],
    null
  );
  const infiniteScrollExists = !!(infiniteScrollInlineConfig && infiniteScrollInlineConfig.length);
  let lastComponent = <Footer text={footerText} />;
  let navbarComponent = <Navbar />;
  let topAd = <TopAd />;
  if (infiniteScrollExists) {
    lastComponent = (
      <InfiniteScroll inlineConfig={infiniteScrollInlineConfig}>
        <div next-page-hide="true" footer="true">
          <Footer text={footerText} />
        </div>
      </InfiniteScroll>
    );
    navbarComponent = (
      <div next-page-hide="true">
        <Navbar />
      </div>
    );
    topAd = (
      <div next-page-hide="true">
        <TopAd />
      </div>
    );
  }
  return (
    <Layout story={story} config={config}>
      {navbarComponent}
      <IncompatibleBanner />
      <GoogleTagManager />
      <Wrapper>
        {topAd}
        <TopSlot />
        <Spacer token="s" />
        <StoryContainer>
          <HeaderCard />
          <WebEngage />
          <Spacer token="m" />
          <LiveList>
            {story.cards.map((card, idx) => {
              const storyCard = card["story-elements"].map((element) => (
                <StoryElement key={element.id} element={element} />
              ));
              return (
                <div
                  key={card.id}
                  id={card.id}
                  data-sort-time={card["card-added-at"]}
                  data-update-time={card["card-updated-at"]}>
                  {storyCard}
                  <CardUpdatedAt timeStamp={card["card-updated-at"]} card={card} />
                  <Spacer token="tiny" />
                  <BodyAd />
                  <LiveBlogCardSlot index={idx} card={card} />
                  <Spacer token="tiny" />
                </div>
              );
            })}
          </LiveList>
          <RelatedStories />
        </StoryContainer>
        <BottomSlot />
        <BottomAd />
      </Wrapper>
      <GoogleAnalytics />
      <QuintypeAnalytics />
      <ComScore />
      <ChartBeat />
      {lastComponent}
    </Layout>
  );
};
