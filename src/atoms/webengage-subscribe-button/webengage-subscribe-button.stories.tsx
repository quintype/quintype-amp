import * as React from "react";
import { storiesOf } from "@storybook/react";
import { WebengageSubscribeButton } from "./webengage-subscribe-button";
import { Layout } from "../layout";
import { textStory, config } from "../../__fixtures__";

storiesOf("WebengageSubscribeButton", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <WebengageSubscribeButton />)
  .add("With custom text", () => <WebengageSubscribeButton text="Enable push notifications" />);
