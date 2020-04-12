import React, { Fragment } from "react";
import { Layout, StoryElement, Spacer } from "../../atoms";
import { HeaderCard, Navbar, Slots, AmpAds } from "../../molecules";
import styled from "styled-components";

const { TopAd, BodyAd, BottomAd } = AmpAds;
const { StoryPageSlots } = Slots;
const { TopSlot, BottomSlot } = StoryPageSlots;
const StoryContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;
const canDisplayBodyAd = (cardIdx, cardsArr) => cardIdx === 2 && cardsArr.length > 2;
const TextStory = ({ story, config }) => {
  return (
    <Layout story={story} config={config}>
      <Navbar />
      <TopAd />
      <TopSlot />
      <HeaderCard />
      <Spacer token="s" />
      <StoryContainer>
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
      <BottomSlot />
      <BottomAd />
    </Layout>
  );
};

export { TextStory };
