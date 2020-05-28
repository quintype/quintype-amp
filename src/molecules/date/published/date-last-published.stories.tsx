import * as React from "react";
import { storiesOf } from "@storybook/react";
import { DateLastPublished } from "./date-last-published";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../../atoms";
import cloneDeep from "lodash.clonedeep";

const configWithCustomizations = cloneDeep(config);
configWithCustomizations.opts = {
  headerCardConfig: {
    dateConfig: {
      showPublishDate: true,
      publishDateFormat: "pp 'on' do MM yyyy",
      publishDatePrepend: "Date of publication: "
    }
  }
};

storiesOf("DateLastPublished", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <DateLastPublished />);

storiesOf("DateLastPublished with custom config", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={configWithCustomizations}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <DateLastPublished />);
