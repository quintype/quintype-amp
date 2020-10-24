import React from "react";
import { HeaderCard, Navbar, RelatedStories, WebEngage, StoryCards } from "../../molecules";
import {
  Layout,
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
import { getServicesParams, getScoreParams, getFallbackEntitlementParams } from "./generic-story.helpers";
import { TopAd, BottomAd } from "../../molecules/ads";
import { StoryPageSlots } from "../../molecules/slots";

const { TopSlot, BottomSlot } = StoryPageSlots;
const StoryContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;

/**
 * The GenericStory is the default template that's (as of Jul 2020) rendered for all stories except live-blog
 *
 * Slots: top-slot, bottom-slot
 *
 * @category Default Templates
 * @component
 */
export const GenericStory = ({ story, config }: CommonTemplateTypes) => {
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
      <Subscription services={services} score={score} fallbackEntitlement={fallbackEntitlement} config={config} />
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
          <StoryCards />
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
