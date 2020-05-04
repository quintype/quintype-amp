import React, { Fragment, useState } from "react";
import { Layout, StoryElement, Spacer, InvalidBanner, Footer } from "../../atoms";
import { HeaderCard, Navbar, RelatedStories, AmpAds } from "../../molecules";
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
const TextStory = ({ story, config, relatedStories }) => {
  const [showInvalidBanner, setStatusInvalidBanner] = useState(false);
  const handleSetInvalid = () => {
    if (!showInvalidBanner) setStatusInvalidBanner(true);
  };
  let invalidBanner;
  invalidBanner = showInvalidBanner ? <InvalidBanner /> : null;
  return (
    <Layout story={story} config={config}>
      <Navbar />
      <Wrapper>
        <TopAd />
        {invalidBanner}
        <StoryContainer>
          <HeaderCard />
          <Spacer token="s" />
          {story.cards.map((card, cardIdx) => {
            const storyCard = card["story-elements"].map((element) => (
              <StoryElement key={element.id} setInvalidBanner={handleSetInvalid} element={element} />
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
        <RelatedStories stories={relatedStories} />
        <BottomAd />
      </Wrapper>
      <Footer />
    </Layout>
  );
};

export { TextStory };
