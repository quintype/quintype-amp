import React, { Fragment, useState } from "react";
import { Layout, StoryElement, Spacer, InvalidBanner } from "../../atoms";
import { HeaderCard, Navbar, AmpAds } from "../../molecules";
import styled from "styled-components";

const { TopAd, BodyAd, BottomAd } = AmpAds;
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
      <Navbar />
      <TopAd />
      {invalidBanner}
      <StoryContainer>
        <HeaderCard />
        <Spacer token="s" />
        {story.cards.map((card, cardIdx) => {
          const storyCard = card["story-elements"].map((element) => (
            <StoryElement setInvalidBanner={handleSetInvalid} key={element.id} element={element} />
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
      <BottomAd />
    </Layout>
  );
};

export { TextStory };
