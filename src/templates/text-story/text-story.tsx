import React, { Fragment } from "react";
import { Layout, StoryElement, Spacer, InvalidBanner } from "../../atoms";
import { HeaderCard, Navbar, AmpAds } from "../../molecules";
import styled from "styled-components";
import { Config } from "../../types/config";
import { Story } from "../../types/story";

const { TopAd, BodyAd, BottomAd } = AmpAds;
const StoryContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;
const canDisplayBodyAd = (cardIdx, cardsArr) => cardIdx === 2 && cardsArr.length > 2;
class TextStory extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      showInvalidBanner: false
    };
    this.setInvalidBanner = this.setInvalidBanner.bind(this);
  }
  setInvalidBanner() {
    if (!this.state.showInvalidBanner) {
      this.setState({ showInvalidBanner: true });
    }
  }
  render() {
    const { story, config } = this.props;
    let invalidBanner;
    invalidBanner = this.state.showInvalidBanner ? <InvalidBanner /> : null;
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
              <StoryElement setInvalidBanner={this.setInvalidBanner} key={element.id} element={element} />
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
  }
}

interface MyProps {
  story: Story;
  config: Config;
}

interface MyState {
  showInvalidBanner: boolean;
}

export { TextStory };
