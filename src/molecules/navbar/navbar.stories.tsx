import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Navbar } from "./navbar";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../../atoms";

storiesOf("Navbar", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Navbar logoSrc="/header-logo.png" />)
  .add("Right Aligned", () => <Navbar logoSrc="/header-logo.png" align="right" />);
