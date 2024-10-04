import React from "react";
import { storiesOf } from "@storybook/react";
import { config, textStory, tiktokElement } from "../../../__fixtures__";
import { Layout } from "../../layout";
import { TiktokElement } from "./tiktok-element";

const { metadata, ...sampleTiktokElementWithoutMetadata } = tiktokElement;

storiesOf("Tiktok Element", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <TiktokElement element={tiktokElement} />)
  .add("With a square different layout", () => (
    <TiktokElement element={tiktokElement} layout="fixed" width="400" height="400" />
  ))
  .add("Tiktok without metadata", () => <TiktokElement element={sampleTiktokElementWithoutMetadata} />);
