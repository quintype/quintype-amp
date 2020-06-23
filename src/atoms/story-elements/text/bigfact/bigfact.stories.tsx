import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Bigfact } from "./bigfact";
import { config, allElementsStory } from "../../../../__fixtures__";
import { Layout } from "../../../layout";

const sampleBigfactElement = {
  description: "",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/0ee36b0b-fa30-4e84-9d1e-d3b26edb2524",
  type: "text",
  "family-id": "ff2ae3dc-b738-428a-9dff-880c1879b686",
  title: "",
  id: "0ee36b0b-fa30-4e84-9d1e-d3b26edb2524",
  metadata: {
    content: "124567",
    attribution: "Cases of Covid-19 worldwide"
  },
  subtype: "bigfact",
  text:
    '<div><div class="bigfact-title">124567</div><div class="bigfact-description">Cases of Covid-19 worldwide</div></div>'
};
storiesOf("Bigfact", module)
  .addDecorator((story) => (
    <Layout story={allElementsStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Bigfact element={sampleBigfactElement} />);
