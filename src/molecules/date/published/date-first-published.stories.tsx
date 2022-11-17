import * as React from "react";
import { storiesOf } from "@storybook/react";
import { DateFirstPublished } from "./date-first-published";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../../atoms";

storiesOf("DateFirstPublished", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <DateFirstPublished />)
  .add("with prepend and format", () => (
    <DateFirstPublished format="pp 'on' do MM yyyy" prepend="Date of publication: " />
  ));
