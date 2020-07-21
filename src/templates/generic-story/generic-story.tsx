import React, { Fragment } from "react";
import { HeaderCard, AmpAds, RelatedStories, WebEngage, Slots } from "../../molecules";
import {
  Layout,
  StoryElement,
  Spacer,
  IncompatibleBanner,
  Footer,
  GoogleTagManager,
  GoogleAnalytics,
  QuintypeAnalytics,
  ComScore,
  ChartBeat,
  InfiniteScroll,
  Subscription
} from "../../atoms";
import styled from "styled-components";
import { GenericStoryTypes } from "./types";
import get from "lodash.get";
import {
  SubscriberAccessPaywall,
  MeteredPaywall,
  MeteredExhaustedPaywall
} from "../../atoms/subscriptions/subscription-paywall";

const { TopAd, BodyAd, BottomAd } = AmpAds;
const { StoryPageSlots } = Slots;
const { TopSlot, BottomSlot } = StoryPageSlots;
const StoryContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;
const canDisplayBodyAd = (cardIdx) => cardIdx === 0;

export const GenericStory = ({
  story,
  config,
  relatedStories,
  infiniteScrollInlineConfig
}: // subscriptionConfig
GenericStoryTypes) => {
  const cardsVisibleForBlockedStory = get(
    config,
    ["publisherConfig", "layout", "no-of-visible-cards-in-a-blocked-story"],
    0
  );
  const cardsAccessible = (cardIdx) => cardIdx <= cardsVisibleForBlockedStory;
  const isNotSubscribed = story.access !== "subscription";
  const footerText = get(config, ["publisherConfig", "publisher-settings", "copyright"], null);
  const infiniteScrollExists = infiniteScrollInlineConfig && infiniteScrollInlineConfig.length; // should also check if infinite scroll collection exists here
  const services = get(config, ["opts", "subscriptions", "services"], null);
  const score = get(config, ["opts", "subscriptions", "score"], null);
  const fallbackEntitlement = get(config, ["opts", "subscriptions", "fallbackEntitlement"], null);
  const loggedInData = get(config, ["opts", "subscriptions", "fallbackEntitlement", "data", "isLoggedIn"]);
  const isLoggedIn = loggedInData === true;
  let lastComponent = <Footer text={footerText} />;
  if (infiniteScrollExists) {
    if (config.opts && config.opts.infiniteScrollRender) {
      lastComponent = config.opts.infiniteScrollRender({ story, config, inlineConfig: infiniteScrollInlineConfig });
    } else {
      lastComponent = (
        <InfiniteScroll inlineConfig={infiniteScrollInlineConfig}>
          <div next-page-hide="true" footer="true">
            <Footer text={footerText} />
          </div>
        </InfiniteScroll>
      );
    }
  }
  return (
    <Layout story={story} config={config}>
      <div next-page-hide={infiniteScrollExists}>{/* <Navbar /> */}</div>
      <IncompatibleBanner />
      <Subscription services={services} score={score} fallbackEntitlement={fallbackEntitlement} />
      <GoogleTagManager />
      <Wrapper>
        <TopAd />
        <TopSlot />
        <Spacer token="s" />
        <StoryContainer>
          <HeaderCard />
          <WebEngage />
          <Spacer token="m" />
          {story.cards.map((card, cardIdx) => {
            const storyCard = card["story-elements"].map((element) => (
              <StoryElement key={element.id} element={element} />
            ));
            return canDisplayBodyAd(cardIdx) ? (
              <Fragment key={card.id}>
                {storyCard}
                <Spacer token="l" />
                <BodyAd />
                <Spacer token="l" />
              </Fragment>
            ) : (
              (cardsAccessible(cardIdx) && isNotSubscribed && !isLoggedIn && (
                <Fragment key={card.id}>{storyCard}</Fragment>
              )) ||
                (!isNotSubscribed && isLoggedIn && <Fragment key={card.id}>{storyCard}</Fragment>)
            );
          })}
          <MeteredPaywall
            config={config}
            story={story}
            services={services}
            score={score}
            fallbackEntitlement={fallbackEntitlement}
          />
          <MeteredExhaustedPaywall
            config={config}
            story={story}
            services={services}
            score={score}
            fallbackEntitlement={fallbackEntitlement}
          />
          <SubscriberAccessPaywall
            config={config}
            story={story}
            services={services}
            score={score}
            fallbackEntitlement={fallbackEntitlement}
          />
          {config.opts && config.opts.relatedStoriesRender ? (
            config.opts.relatedStoriesRender({ relatedStories, config, story })
          ) : (
            <RelatedStories stories={relatedStories} />
          )}
        </StoryContainer>
        <BottomSlot />
        <BottomAd />
      </Wrapper>
      <GoogleAnalytics />
      <QuintypeAnalytics />
      <ComScore />
      <ChartBeat />
      {lastComponent}
    </Layout>
  );
};
