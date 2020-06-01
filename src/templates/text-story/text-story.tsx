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
  ChartBeat
} from "../../atoms";
import styled from "styled-components";
import { TextStoryTypes } from "./types";

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
const TextStory = ({ story, config, relatedStories }: TextStoryTypes) => (
  <Layout story={story} config={config}>
    <Navbar />
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

        {config.opts && config.opts.relatedStoriesRender ? (
          config.opts.relatedStoriesRender({ relatedStories, config, story })
        ) : (
          <RelatedStories stories={relatedStories} />
        )}
      </StoryContainer>
      <BottomSlot />
      <BottomAd />
    </Wrapper>
    <Footer
      text={config.publisherConfig["publisher-settings"] && config.publisherConfig["publisher-settings"]["copyright"]}
    />
    <GoogleAnalytics />
    <QuintypeAnalytics />
    <ComScore />
    <ChartBeat />
  </Layout>
);

export { TextStory };
