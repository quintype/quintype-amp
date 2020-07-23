import * as React from "react";
import { storiesOf } from "@storybook/react";
import { SubscriberAccessPaywall, MeteredPaywall, MeteredExhaustedPaywall } from "./subscription-paywall";
import { textStory, config } from "../../__fixtures__";
import { Layout } from "../layout";

storiesOf("Subscriber Access Paywall", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Subscriber Access Paywall", () => <SubscriberAccessPaywall />)
  .add("Metered Paywall", () => <MeteredPaywall config={config} />)
  .add("Metered Exhausdted Paywall", () => <MeteredExhaustedPaywall config={config} />);
