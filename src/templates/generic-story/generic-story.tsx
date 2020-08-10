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
import { getServicesParams, getScoreParams, getFallbackEntitlementParams } from "./generic-story.helpers";
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

export const GenericStory = ({ story, config }: GenericStoryTypes) => {
  const cardsVisibleForBlockedStory = get(
    config,
    ["publisherConfig", "layout", "no-of-visible-cards-in-a-blocked-story"],
    1
  );
  const cardsAccessible = (cardIdx) => cardIdx <= cardsVisibleForBlockedStory;
  const granted = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "granted"], null);
  const isGranted = granted === true;
  const isAccessible = story.access === "subscription";
  const services = getServicesParams({ story, config });
  console.log(services, "<---services");
  const score = getScoreParams({ config });
  console.log(score, "<---services");
  const fallbackEntitlement = getFallbackEntitlementParams({ config });
  console.log(fallbackEntitlement, "<---services");
  // const services = get(config, ["opts", "featureConfig", "subscriptions", "services"], null);
  // const score = get(config, ["opts", "featureConfig", "subscriptions", "score"], null);
  // const fallbackEntitlement = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement"], null);
  // const servicesExists = services && services.length;
  // const scoreExists = score && score.length;
  // const fallbackEntitlementExists = fallbackEntitlement && fallbackEntitlement.length;
  // if (servicesExists && scoreExists && fallbackEntitlementExists) {
  //   return (
  //     <>
  //       <MeteredPaywall config={config} story={story} />
  //       <MeteredExhaustedPaywall config={config} story={story} />
  //       <SubscriberAccessPaywall />
  //     </>
  //   );
  // }
  const footerText = get(config, ["publisherConfig", "publisher-settings", "copyright"], null);
  const infiniteScrollInlineConfig = get(
    config,
    ["opts", "featureConfig", "infiniteScroll", "infiniteScrollInlineConfig"],
    null
  );
  const infiniteScrollExists = infiniteScrollInlineConfig && infiniteScrollInlineConfig.length;
  let lastComponent = <Footer text={footerText} />;
  if (infiniteScrollExists) {
    lastComponent = (
      <InfiniteScroll inlineConfig={infiniteScrollInlineConfig}>
        <div next-page-hide="true" footer="true">
          <Footer text={footerText} />
        </div>
      </InfiniteScroll>
    );
  }
  return (
    <Layout story={story} config={config}>
      <div next-page-hide={infiniteScrollExists}>{/* <Navbar /> */}</div>
      <Subscription services={services} score={score} fallbackEntitlement={fallbackEntitlement} />
      <IncompatibleBanner />
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
              (cardsAccessible(cardIdx) && isAccessible && !isGranted && (
                <Fragment key={card.id}>{storyCard}</Fragment>
              )) ||
                (!isAccessible && isGranted && <Fragment key={card.id}>{storyCard}</Fragment>)
            );
          })}
          {isAccessible && (
            <>
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
                services={services}
                score={score}
                fallbackEntitlement={fallbackEntitlement}
              />
            </>
          )}
          <RelatedStories />
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
