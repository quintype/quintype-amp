import React from "react";
import { HeaderCard, Navbar, RelatedStories, WebEngage } from "../../molecules";
import {
  Layout,
  // StoryElement,
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
import { CommonTemplateTypes } from "../common-template-types";
import get from "lodash.get";
import {
  SubscriberAccessPaywall,
  MeteredPaywall,
  // MeteredExhaustedPaywall
} from "../../atoms/subscriptions/subscriptions-paywall";
import {
  getServicesParams,
  getScoreParams,
  getFallbackEntitlementParams
  // displayCardsWithBodyAd,
  // displayCardsWithoutBodyAd
} from "./generic-story.helpers";
import { TopAd, BottomAd } from "../../molecules/ads";
import { StoryPageSlots } from "../../molecules/slots";
import { StoryCardsWithSubscriptions } from "./subscription-components";

const { TopSlot, BottomSlot } = StoryPageSlots;
const StoryContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;
// const canDisplayBodyAd = (cardIdx) => cardIdx === 0;

/**
 * The GenericStory is the default template that's (as of Jul 2020) rendered for all stories except live-blog
 *
 * Slots: top-slot, bottom-slot
 *
 * @category Default Templates
 * @component
 */
export const GenericStory = ({ story, config }: CommonTemplateTypes) => {
  const isAccessible = story.access === "subscription";
  const services = getServicesParams({ story, config });
  const score = getScoreParams({ config });
  const fallbackEntitlement = getFallbackEntitlementParams({ config });
  const footerText = get(config, ["publisherConfig", "publisher-settings", "copyright"], null);
  const infiniteScrollInlineConfig = get(
    config,
    ["opts", "featureConfig", "infiniteScroll", "infiniteScrollInlineConfig"],
    null
  );
  const infiniteScrollExists = !!(infiniteScrollInlineConfig && infiniteScrollInlineConfig.length);
  let lastComponent = <Footer text={footerText} />;
  let navbarComponent = <Navbar />;
  if (infiniteScrollExists) {
    lastComponent = (
      <InfiniteScroll inlineConfig={infiniteScrollInlineConfig}>
        <div next-page-hide="true" footer="true">
          <Footer text={footerText} />
        </div>
      </InfiniteScroll>
    );
    navbarComponent = (
      <div next-page-hide="true">
        <Navbar />
      </div>
    );
  }
  const templateName = "default";
  return (
    <Layout story={story} config={config}>
      <Subscription services={services} score={score} fallbackEntitlement={fallbackEntitlement} />
      {navbarComponent}
      <IncompatibleBanner />
      <GoogleTagManager />
      <Wrapper>
        <TopAd templateName={templateName} />
        <TopSlot />
        <Spacer token="s" />
        <StoryContainer>
          <HeaderCard />
          <WebEngage />
          <Spacer token="m" />
          <StoryCardsWithSubscriptions />
          {/* {displayCardsWithBodyAd({ story })}
          {displayCardsWithoutBodyAd({ story, config })} */}
          {isAccessible && (
            <>
              <MeteredPaywall
                config={config}
                story={story}
                services={services}
                score={score}
                fallbackEntitlement={fallbackEntitlement}
              />
              {/* <MeteredExhaustedPaywall
                config={config}
                story={story}
                services={services}
                score={score}
                fallbackEntitlement={fallbackEntitlement}
              /> */}
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
        <BottomAd templateName={templateName} />
      </Wrapper>
      <GoogleAnalytics />
      <QuintypeAnalytics />
      <ComScore />
      <ChartBeat />
      {lastComponent}
    </Layout>
  );
};
