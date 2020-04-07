import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Ad } from "./ad";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../layout";

const genericAd = {
  type: "industrybrains",
  width: 300,
  height: 250,
  "data-width": "300",
  "data-height": "250",
  "data-cid": "19626-3798936394"
};

const invalidAd = {
  width: "300",
  height: "250",
  type: "doubleclick",
  "data-slot": "/4119129/doesnt-exist"
};

storiesOf("Ad", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Simple Ad", () => <Ad {...genericAd} />)
  .add("Ad with Placeholder", () => (
    <Ad {...genericAd}>
      <div placeholder="true">Loading ...</div>
    </Ad>
  ))
  .add("Ad with fallback", () => (
    <Ad {...invalidAd}>
      <div fallback="true">Ad failed to load</div>
    </Ad>
  ));
