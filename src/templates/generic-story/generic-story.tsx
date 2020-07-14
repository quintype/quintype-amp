import React, { Fragment } from "react";
import { HeaderCard, Navbar, AmpAds, RelatedStories, WebEngage, Slots } from "../../molecules";
import {
  Layout,
  StoryElement,
  Spacer,
  IncompatibleBanner,
  Footer,
  GoogleTagManager,
  GoogleAnalytics,
  QuintypeAnalytics,
  ComScore,
  ChartBeat,
  InfiniteScroll
} from "../../atoms";
import styled from "styled-components";
import { GenericStoryTypes } from "./types";
import get from "lodash.get";

const { TopAd, BodyAd, BottomAd } = AmpAds;
const { StoryPageSlots } = Slots;
const { TopSlot, BottomSlot } = StoryPageSlots;
const StoryContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;
const canDisplayBodyAd = (cardIdx) => cardIdx === 0;

export const GenericStory = ({ story, config, relatedStories, infiniteScrollInlineConfig }: GenericStoryTypes) => {
  const footerText = get(config, ["publisherConfig", "publisher-settings", "copyright"], null);
  const infiniteScrollExists = infiniteScrollInlineConfig && infiniteScrollInlineConfig.length; // should also check if infinite scroll collection exists here
  let lastComponent = <Footer text={footerText} />;
  if (infiniteScrollExists) {
    if (config.opts && config.opts.infiniteScrollRender) {
      lastComponent = config.opts.infiniteScrollRender({ story, config, inlineConfig: infiniteScrollInlineConfig });
    } else {
      lastComponent = (
        <InfiniteScroll inlineConfig={infiniteScrollInlineConfig}>
          <div next-page-hide="true" footer="true">
            <Footer text={footerText} />
          </div>
        </InfiniteScroll>
      );
    }
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
          {story.cards.map((card, cardIdx) => {
            const storyCard = card["story-elements"].map((element) => (
              <StoryElement key={element.id} element={element} />
            ));
            return canDisplayBodyAd(cardIdx) ? (
              <Fragment key={card.id}>
                {storyCard}
                <Spacer token="l" />
                <BodyAd />
                <Spacer token="l" />
              </Fragment>
            ) : (
              <Fragment key={card.id}>{storyCard}</Fragment>
            );
          })}
          <RelatedStories stories={relatedStories} />
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
