import * as React from "react";
import { storiesOf } from "@storybook/react";
import { DateUpdated } from "./date-updated";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../../atoms";

storiesOf("DateUpdated", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <DateUpdated />)
  .add("With Prepend", () => <DateUpdated prepend="Updated: " />);
