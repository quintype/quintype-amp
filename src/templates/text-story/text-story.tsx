import React, { Fragment } from "react";
import { Layout, StoryElement, Spacer } from "../../atoms";
import { HeaderCard, Navbar, AmpAds, RelatedStories } from "../../molecules";
import styled from "styled-components";

const { TopAd, BodyAd, BottomAd } = AmpAds;
const StoryContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;
const canDisplayBodyAd = (cardIdx, cardsArr) => cardIdx === 2 && cardsArr.length > 2;
const TextStory = ({ story, config, relatedStoriesArr }) => {
  return (
    <Layout story={story} config={config}>
      <Navbar logoSrc="/header-logo.png" />
      <Wrapper>
        <TopAd />
        <StoryContainer>
          <HeaderCard />
          <Spacer token="s" />
          {story.cards.map((card, cardIdx) => {
            const storyCard = card["story-elements"].map((element) => (
              <StoryElement key={element.id} element={element} />
            ));
            return canDisplayBodyAd(cardIdx, story.cards) ? (
              <Fragment>
                <BodyAd />
                {storyCard}
              </Fragment>
            ) : (
              storyCard
            );
          })}
        </StoryContainer>
        <Spacer token="m" />
        <RelatedStories stories={relatedStoriesArr} />
        <BottomAd />
      </Wrapper>
    </Layout>
  );
};

export { TextStory };
