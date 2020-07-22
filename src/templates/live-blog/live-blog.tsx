// slots: top, bottom, after every card, after every alternate card
// overrides: card info ("updated at" line after every card)
// config:
//  - ascending/descending order of "card-added-at" time
//  - show/hide "added at"; "updated at"
//  - max items per page
//  - poll-interval

import React, { Fragment } from "react";
import { CommonTemplateTypes } from "../common-template-types";
import { Layout, StoryElement, Spacer, LiveList } from "../../atoms";
import { HeaderCard, Navbar, AmpAds, Slots } from "../../molecules";
import { StoryContainer, Wrapper } from "./presentational-components";
import { CardUpdatedAt } from "./container-components";

const { TopAd, BottomAd } = AmpAds;
const { StoryPageSlots } = Slots;
const { TopSlot, BottomSlot, LiveBlogCardSlot } = StoryPageSlots;

/**
 * The LiveBlog is the default template for live blog type stories.
 *
 * Slots: top-slot, bottom-slot, live-blog-card-slot
 * Customizable features:
 *  - can choose normal or verbose card update timestamp. Normal > "about 24 hours ago"; Verbose > "July 21, 2020 at 9:34 AM".
 *    Normal is chosen by default. To choose verbose, set opts.featureConfig.liveBlog.cardUpdateTimeStampFormat = "verbose"
 *
 * @category Default Templates
 * @component
 */
export const LiveBlog = ({ story, config }: CommonTemplateTypes) => {
  return (
    <Layout story={story} config={config}>
      <Navbar />
      <Wrapper>
        <TopAd />
        <TopSlot />
        <Spacer token="s" />
        <StoryContainer>
          <HeaderCard />
          <Spacer token="m" />
          <LiveList>
            {story.cards.map((card, idx) => {
              const storyCard = card["story-elements"].map((element) => (
                <StoryElement key={element.id} element={element} />
              ));
              return (
                <Fragment key={card.id}>
                  {storyCard}
                  <CardUpdatedAt timeStamp={card["card-updated-at"]} />
                  <LiveBlogCardSlot index={idx} />
                  <Spacer token="xs" />
                </Fragment>
              );
            })}
          </LiveList>
        </StoryContainer>
        <BottomSlot />
        <BottomAd />
      </Wrapper>
    </Layout>
  );
};
