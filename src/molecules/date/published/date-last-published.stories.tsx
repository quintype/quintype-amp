import * as React from "react";
import { storiesOf } from "@storybook/react";
import { DateLastPublished } from "./date-last-published";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../../atoms";

storiesOf("DateLastPublished", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <DateLastPublished />);
