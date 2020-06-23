import * as React from "react";
import { storiesOf } from "@storybook/react";
import { DfpAd } from "./dfp-ad";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../layout";

const genericAd = {
  width: 300,
  height: 250,
  "data-slot": "/35096353/amptesting/formats/sticky"
};

const invalidAd = {
  width: 300,
  height: 250,
  "data-slot": "/4119129/doesnt-exist"
};

storiesOf("Ad", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Simple Ad", () => <DfpAd {...genericAd} />)
  .add("Ad with Placeholder", () => (
    <DfpAd {...genericAd}>
      <div placeholder="true">Loading ...</div>
    </DfpAd>
  ))
  .add("Ad with fallback", () => (
    <DfpAd {...invalidAd}>
      <div fallback="true">Ad failed to load</div>
    </DfpAd>
  ));
