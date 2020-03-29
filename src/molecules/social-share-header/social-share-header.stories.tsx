import * as React from "react";
import { storiesOf } from "@storybook/react";
import { SocialShareHeader } from "./social-share-header";
import { Layout } from "../../atoms";
import { textStory, config } from "../../__fixtures__";

storiesOf("SocialShareHeader", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("default", () => <SocialShareHeader />);
