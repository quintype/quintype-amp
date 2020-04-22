import React, { Fragment } from "react";
import { Layout, StoryElement, Spacer } from "../../atoms";
import { HeaderCard, Navbar, RelatedStories, Slots, AmpAds } from "../../molecules";
import styled from "styled-components";

const { TopAd, BodyAd, BottomAd } = AmpAds;
const { StoryPageSlots } = Slots;
const { TopSlot, BottomSlot } = StoryPageSlots;
const StoryContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;
const canDisplayBodyAd = (cardIdx, cardsArr) => cardIdx === 2 && cardsArr.length > 2;
const TextStory = ({ story, config, relatedStories }) => {
  return (
    <Layout story={story} config={config}>
      <Navbar logoSrc="/header-logo.png" />
      <Wrapper>
        <TopAd />
        <TopSlot />
        <StoryContainer>
          <HeaderCard />
          <Spacer token="s" />
          {story.cards.map((card, cardIdx) => {
            const storyCard = card["story-elements"].map((element) => (
              <StoryElement key={element.id} element={element} />
            ));
            return canDisplayBodyAd(cardIdx, story.cards) ? (
              <Fragment key={card.id}>
                <BodyAd />
                {storyCard}
              </Fragment>
            ) : (
              <Fragment key={card.id}>{storyCard}</Fragment>
            );
          })}
        </StoryContainer>
        <Spacer token="m" />
        <BottomSlot />
        <RelatedStories stories={relatedStories} />
        <BottomAd />
      </Wrapper>
    </Layout>
  );
};

export { TextStory };
