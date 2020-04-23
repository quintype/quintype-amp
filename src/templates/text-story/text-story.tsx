import React, { Fragment, useState } from "react";
import { Layout, StoryElement, Spacer, InvalidBanner, Link } from "../../atoms";
import { HeaderCard, Navbar, AmpAds, Slots } from "../../molecules";
import styled from "styled-components";
import get from "lodash.get";

const { TopAd, BodyAd, BottomAd } = AmpAds;
const { StoryPageSlots } = Slots;
const { TopSlot, BottomSlot } = StoryPageSlots;
const StoryContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.s};
`;
const canDisplayBodyAd = (cardIdx, cardsArr) => cardIdx === 2 && cardsArr.length > 2;
const TextStory = ({ story, config }) => {
  const [showInvalidBanner, setStatusInvalidBanner] = useState(false);
  const handleSetInvalid = () => {
    if (!showInvalidBanner) setStatusInvalidBanner(true);
  };
  let invalidBanner;
  invalidBanner = showInvalidBanner ? <InvalidBanner /> : null;
  return (
    <Layout story={story} config={config}>
      <Link rel="canonical" href={get(story, "url")} />
      <Navbar />
      <TopAd />
      {invalidBanner}
      <TopSlot />
      <HeaderCard />
      <Spacer token="s" />
      <StoryContainer>
        <HeaderCard />
        <Spacer token="s" />
        {story.cards.map((card, cardIdx) => {
          const storyCard = card["story-elements"].map((element) => (
            <StoryElement setInvalidBanner={handleSetInvalid} key={element.id} element={element} />
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
