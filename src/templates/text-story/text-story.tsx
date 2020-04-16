import React, { Fragment, useState } from "react";
import { Layout, StoryElement, Spacer, InvalidBanner } from "../../atoms";
import { HeaderCard, Navbar, AmpAds } from "../../molecules";
import styled from "styled-components";

const { TopAd, BodyAd, BottomAd } = AmpAds;
const StoryContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;
const canDisplayBodyAd = (cardIdx, cardsArr) => cardIdx === 2 && cardsArr.length > 2;
const StoryContentWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;
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
      <StoryContentWrapper>
        <HeaderCard />
        <Spacer token="s" />
        <StoryContainer>
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
      </StoryContentWrapper>
      <BottomAd />
    </Layout>
  );
};

export { TextStory };
