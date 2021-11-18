import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Navbar } from "./navbar";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../../atoms";
import cloneDeep from "lodash.clonedeep";

export const configWithTextDirRtl = cloneDeep(config);
configWithTextDirRtl.publisherConfig.language.direction = "rtl";

export const configWithMenuDisabled = cloneDeep(config);
configWithMenuDisabled.ampConfig.menu.enabled = false;

export const configWithNoHamburgerMenuItems = cloneDeep(config);
configWithNoHamburgerMenuItems.ampConfig["menu-groups"].default.items = [];

storiesOf("Navbar", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Navbar />)
  .add("Right Aligned", () => <Navbar align="right" />);

storiesOf("Navbar for RTL publisher", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={configWithTextDirRtl}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Navbar />)
  .add("Right Aligned", () => <Navbar align="right" />);

storiesOf("Navbar for publisher with disabled hamburger menu", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={configWithMenuDisabled}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Navbar />);
