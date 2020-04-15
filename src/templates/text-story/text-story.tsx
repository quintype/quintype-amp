import React, { Fragment, useState } from "react";
import { Layout, StoryElement, Spacer, InvalidBanner } from "../../atoms";
import { HeaderCard, Navbar, AmpAds } from "../../molecules";
import styled from "styled-components";

const { TopAd, BodyAd, BottomAd } = AmpAds;
const StoryContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;
const canDisplayBodyAd = (cardIdx, cardsArr) => cardIdx === 2 && cardsArr.length > 2;
const TextStory = ({ story, config }) => {
  const [showInvalidBanner, setInvalidBanner] = useState(false);
  let invalidBanner;
  invalidBanner = showInvalidBanner ? <InvalidBanner /> : null;
  return (
    <Layout story={story} config={config}>
      <Navbar />
      <TopAd />
      {invalidBanner}
      <HeaderCard />
      <Spacer token="s" />
      <StoryContainer>
        {story.cards.map((card, cardIdx) => {
          const storyCard = card["story-elements"].map((element) => (
            <StoryElement setInvalidBanner={setInvalidBanner} key={element.id} element={element} />
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
