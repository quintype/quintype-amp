import * as React from "react";
import { storiesOf } from "@storybook/react";
import { DateTime } from "./date-time";
import { config, textStory } from "../../__fixtures__";
import Layout from "../layout";

storiesOf("DateTime", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("With date", () => <DateTime dateTime={1579162728583} />)
  .add("With date and time", () => <DateTime dateTime={1579162728583} showTime={true} />)
  .add("With custom date format", () => <DateTime dateTime={1579162728583} formatString="dd MMMM yyyy" />);
