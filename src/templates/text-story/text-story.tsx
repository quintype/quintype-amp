import React, { Fragment } from "react";
import { Layout, StoryElement, Spacer, InvalidBanner, Link, Footer } from "../../atoms";
import { HeaderCard, Navbar, AmpAds } from "../../molecules";
import styled from "styled-components";
import get from "lodash.get";
import { Iprops, Istate } from "./types";

const { TopAd, BodyAd, BottomAd } = AmpAds;
const StoryContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.s};
`;

export class TextStory extends React.Component<Iprops, Istate> {
  constructor(props) {
    super(props);
    this.state = {
      showInvalidBanner: false
    };
    this.handleSetInvalid = this.handleSetInvalid.bind(this);
  }
  canDisplayBodyAd(cardIdx, cardsArr) {
    return cardIdx === 2 && cardsArr.length > 2;
  }
  handleSetInvalid() {
    if (!this.state.showInvalidBanner) this.setState({ showInvalidBanner: true });
  }
  render() {
    const { story, config } = this.props;
    let invalidBanner;
    invalidBanner = this.state.showInvalidBanner ? <InvalidBanner /> : null;
    return (
      <Layout story={story} config={config}>
        <Link rel="canonical" href={get(story, "url")} />
        <Navbar />
        <TopAd />
        {invalidBanner}
        <Spacer token="s" />
        <StoryContainer>
          <HeaderCard />
          <Spacer token="s" />
          {story.cards.map((card, cardIdx) => {
            const storyCard = card["story-elements"].map((element) => (
              <StoryElement setInvalidBanner={this.handleSetInvalid} key={element.id} element={element} />
            ));
            return this.canDisplayBodyAd(cardIdx, story.cards) ? (
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
        <Footer />
      </Layout>
    );
  }
}
