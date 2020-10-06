import * as React from "react";
import { storiesOf } from "@storybook/react";
import { SubscriberAccessPaywall, MeteredPaywall } from "./subscription-paywall";
import { textStory, config } from "../../../__fixtures__";
import { Layout } from "../../layout";

const meteredConfig = {
  featureConfig: {
    subscriptions: {
      services: {
        authorizationUrl: ({ story }) =>
          `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
        pingbackUrl: ({ story }) =>
          `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
        actions: { login: "https://www.google.com", subscribe: "https://www.facebook.com" }
      },
      score: { supportsViewer: 10, isReadyToPay: 9 },
      fallbackEntitlement: {
        source: "fallback",
        granted: true,
        grantReason: "METERING",
        data: { numberRemaining: 4, isLast: false, isLoggedIn: false }
      }
    }
  }
};
const meterExhaustedConfig = {
  featureConfig: {
    subscriptions: {
      services: {
        authorizationUrl: ({ story }) =>
          `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
        pingbackUrl: ({ story }) =>
          `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
        actions: { login: "https://www.google.com", subscribe: "https://www.facebook.com" }
      },
      score: { supportsViewer: 10, isReadyToPay: 9 },
      fallbackEntitlement: {
        source: "fallback",
        granted: true,
        grantReason: "METERING",
        data: { numberRemaining: 4, isLast: true, isLoggedIn: false }
      }
    }
  }
};
const hardPaywallConfig = {
  featureConfig: {
    subscriptions: {
      services: {
        authorizationUrl: ({ story }) =>
          `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
        pingbackUrl: ({ story }) =>
          `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
        actions: { login: "https://www.google.com", subscribe: "https://www.facebook.com" }
      },
      score: { supportsViewer: 10, isReadyToPay: 9 },
      fallbackEntitlement: {
        source: "fallback",
        granted: false,
        grantReason: "SUBSCRIBER",
        data: { numberRemaining: 4, isLast: false, isLoggedIn: false }
      }
    }
  }
};
storiesOf("Subscriber Access Paywall", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Subscriber Access Paywall", () => <SubscriberAccessPaywall config={hardPaywallConfig} />)
  .add("Metered Paywall", () => <MeteredPaywall config={meteredConfig} />)
  .add("Meter Exhausted Paywall", () => <MeteredPaywall config={meterExhaustedConfig} />)
