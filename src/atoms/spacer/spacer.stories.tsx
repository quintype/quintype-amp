import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Spacer } from "./spacer";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../layout";

storiesOf("Spacer", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Vertical spacer", () => (
    <div>
      <div style={{ background: "rebeccapurple", color: "whitesmoke" }}>Some Content</div>
      <Spacer token="xs" />
      <div style={{ background: "rebeccapurple", color: "whitesmoke" }}>Some Content</div>
    </div>
  ))
  .add("Horizontal Spacer", () => (
    <div style={{ display: "flex" }}>
      <div style={{ background: "rebeccapurple", color: "whitesmoke" }}>Some Content</div>
      <Spacer token="xl" align="horizontal" />
      <div style={{ background: "rebeccapurple", color: "whitesmoke" }}>Some Content</div>
    </div>
  ));
