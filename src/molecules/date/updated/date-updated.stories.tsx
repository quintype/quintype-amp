import * as React from "react";
import { storiesOf } from "@storybook/react";
import { DateUpdated } from "./date-updated";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../../atoms";
import cloneDeep from "lodash.clonedeep";

const configWithCustomizations = cloneDeep(config);
configWithCustomizations.opts = {
  headerCardConfig: {
    dateConfig: {
      updateDatePrepend: "Updated: ",
      showUpdateDate: true
    }
  }
};

storiesOf("DateUpdated", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default (Disabled)", () => <DateUpdated />);

storiesOf("DateUpdated with custom config", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={configWithCustomizations}>
      {story()}
    </Layout>
  ))
  .add("Enabled", () => <DateUpdated />);
