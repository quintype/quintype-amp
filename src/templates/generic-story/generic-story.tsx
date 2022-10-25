import React from "react";
import { HeaderCard, Navbar, RelatedStories, WebEngage } from "../../molecules";
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
  Subscription,
  Fonts
} from "../../atoms";
import styled from "styled-components";
import { CommonTemplateTypes } from "../common-template-types";
import get from "lodash.get";
import { TopAd, BottomAd } from "../../molecules/ads";
import { StoryPageSlots } from "../../molecules/slots";
import { StoryCards } from "../../molecules/story-cards/story-card";
import { infiniteScrollExists } from "../../helpers";

const { TopSlot, BottomSlot } = StoryPageSlots;
const StoryContainer = styled.div.attrs({
  id: "qt-amp-story-container",
  className: "qt-amp-story-container-class"
})`
  max-width: 600px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.spacing.s};
`;

/**
 * The GenericStory template is the default story template
 *
 * Slots: top-slot, bottom-slot
 *
 * @category Default Templates
 * @component
 */
export const GenericStory = ({ story, config }: CommonTemplateTypes) => {
  const footerText = get(config, ["publisherConfig", "publisher-settings", "copyright"], null);
  let showPoweredByQt = get(config, ["opts", "featureConfig", "showPoweredByQt"], true);
  const infiniteScrollInlineConfig = get(
    config,
    ["opts", "featureConfig", "infiniteScroll", "infiniteScrollInlineConfig"],
    null
  );

  showPoweredByQt = typeof showPoweredByQt === "function" ? showPoweredByQt() : showPoweredByQt;

  let lastComponent = <Footer text={footerText} showPoweredByQt={showPoweredByQt} />;
  let navbarComponent = <Navbar />;
  if (infiniteScrollExists(config)) {
    lastComponent = (
      <InfiniteScroll inlineConfig={infiniteScrollInlineConfig}>
        <div next-page-hide="true" footer="true">
          <Footer text={footerText} showPoweredByQt={showPoweredByQt} />
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
      <Subscription />
      <Fonts />
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
