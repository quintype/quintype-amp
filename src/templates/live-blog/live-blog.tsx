// slots: top, bottom, after every card, after every alternate card
// overrides: card info ("updated at" line after every card)
// config:
//  - ascending/descending order of "card-added-at" time
//  - show/hide "added at"; "updated at"
//  - max items per page
//  - poll-interval

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
  const infiniteScrollExists = infiniteScrollInlineConfig && infiniteScrollInlineConfig.length;
  let lastComponent = <Footer text={footerText} />;
  if (infiniteScrollExists) {
    lastComponent = (
      <InfiniteScroll inlineConfig={infiniteScrollInlineConfig}>
        <div next-page-hide="true" footer="true">
          <Footer text={footerText} />
        </div>
      </InfiniteScroll>
    );
  }
  return (
    <Layout story={story} config={config}>
      <div next-page-hide={infiniteScrollExists}>
        <Navbar />
      </div>
      <IncompatibleBanner />
      <GoogleTagManager />
      <Wrapper>
        <TopAd />
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
                  <CardUpdatedAt timeStamp={card["card-updated-at"]} />
                  <Spacer token="tiny" />
                  <BodyAd />
                  <LiveBlogCardSlot index={idx} />
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
