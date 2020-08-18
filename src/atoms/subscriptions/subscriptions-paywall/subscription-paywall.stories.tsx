import * as React from "react";
import { storiesOf } from "@storybook/react";
import { SubscriberAccessPaywall, MeteredPaywall, MeteredExhaustedPaywall } from "./subscription-paywall";
import { textStory, config } from "../../../__fixtures__";
import { Layout } from "../../layout";

const services = [{
  authorizationUrl:
    `https://newslaundry-web.qtstage.io/api/access/v1/stories/7f3d5bdb-ec52-4047-ac0d-df4036ec974b/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
  pingbackUrl:
    `https://newslaundry-web.qtstage.io/api/access/v1/stories/7f3d5bdb-ec52-4047-ac0d-df4036ec974b/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
  actions: { login: "https://www.google.com", subscribe: "https://www.facebook.com" }
}];
const score = { supportsViewer: 10, isReadyToPay: 9 };
const fallbackEntitlement = {
  source: "fallback",
  granted: false,
  grantReason: "SUBSCRIBER",
  data: { numberRemaining: 4, isLast: false, isLoggedIn: false }
};
storiesOf("Subscriber Access Paywall", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Subscriber Access Paywall", () => <SubscriberAccessPaywall services={services}
    score={score}
    fallbackEntitlement={fallbackEntitlement} config={config} story={textStory} />)
  .add("Metered Paywall", () => <MeteredPaywall config={config} services={services}
    score={score}
    fallbackEntitlement={fallbackEntitlement} />)
  .add("Metered Exhausdted Paywall", () => <MeteredExhaustedPaywall config={config} services={services}
    score={score}
    fallbackEntitlement={fallbackEntitlement} />);
