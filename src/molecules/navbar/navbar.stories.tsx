import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Navbar } from "./navbar";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../../atoms";
import cloneDeep from "lodash.clonedeep";

const modifiedConfig1 = cloneDeep(config);
modifiedConfig1.ampConfig.text_direction = "rtl";

const modifiedConfig2 = cloneDeep(config);
modifiedConfig2.ampConfig.menu.enabled = false;

storiesOf("Navbar", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Navbar />)
  .add("With custom logo", () => <Navbar logoSrc="/header-logo.png" />)
  .add("Right Aligned", () => <Navbar align="right" />);

storiesOf("Navbar for RTL publisher", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={modifiedConfig1}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Navbar />)
  .add("With custom logo", () => <Navbar logoSrc="/header-logo.png" />)
  .add("Right Aligned", () => <Navbar align="right" />);

storiesOf("Navbar for publisher with disabled hamburger menu", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={modifiedConfig2}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Navbar />);
