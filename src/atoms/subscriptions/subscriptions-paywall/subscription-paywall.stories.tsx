import * as React from "react";
import { storiesOf } from "@storybook/react";
import { SubscriberAccessPaywall, MeteredPaywall } from "./subscription-paywall";
import { textStory, config } from "../../../__fixtures__";
import { Layout } from "../../layout";

const services = [{
  authorizationUrl: ({ story }) =>
    `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=1MMmdsHimbytzjKXYGcv8Xwj&accesstype_integration_id=14&readerId=READER_ID`,
  pingbackUrl: ({ story }) =>
    `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-pingback?key=1MMmdsHimbytzjKXYGcv8Xwj&accesstype_integration_id=14&readerId=READER_ID`,
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
