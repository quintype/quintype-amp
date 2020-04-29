import React, { Fragment } from "react";
import { Layout, StoryElement, Spacer, IncompatibleBanner, Link } from "../../atoms";
import { HeaderCard, Navbar, AmpAds } from "../../molecules";
import styled from "styled-components";
import get from "lodash.get";

const { TopAd, BodyAd, BottomAd } = AmpAds;
const StoryContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.s};
`;
const canDisplayBodyAd = (cardIdx, cardsArr) => cardIdx === 2 && cardsArr.length > 2;
const TextStory = ({ story, config }) => (
  <Layout story={story} config={config}>
    <Link rel="canonical" href={get(story, "url")} />
    <Navbar />
    <TopAd />
    <IncompatibleBanner />
    <HeaderCard />
    <Spacer token="s" />
    <StoryContainer>
      <HeaderCard />
      <Spacer token="s" />
      {story.cards.map((card, cardIdx) => {
        const storyCard = card["story-elements"].map((element) => <StoryElement key={element.id} element={element} />);
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
    <BottomAd />
  </Layout>
);

export { TextStory };
