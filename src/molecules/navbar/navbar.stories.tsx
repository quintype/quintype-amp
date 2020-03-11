import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Navbar } from "./navbar";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../../atoms";
import cloneDeep from "lodash.clonedeep";

const modifiedConfig = cloneDeep(config);
modifiedConfig.theme.text_direction = "rtl";

storiesOf("Navbar", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Navbar />)
  .add("With custom logo", () => <Navbar logoSrc="/header-logo.png" />)
  .add("Right Aligned", () => <Navbar align="right" />);

storiesOf("Navbar for LTR publisher", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={modifiedConfig}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Navbar />)
  .add("With custom logo", () => <Navbar logoSrc="/header-logo.png" />)
  .add("Right Aligned", () => <Navbar align="right" />);
