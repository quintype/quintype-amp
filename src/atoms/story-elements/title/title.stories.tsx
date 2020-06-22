import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Title } from "./title";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";

const sampleTitleElement = {
  description: "",
  "page-url": "/story/af018d6b-2166-4344-b167-40405a148e41/element/5737bdd7-bdce-4396-9318-9ac8007f0970",
  type: "title",
  "family-id": "65d7db11-3fd5-4cf7-bcf3-a55b70b49e8a",
  title: "",
  id: "5737bdd7-bdce-4396-9318-9ac8007f0970",
  metadata: {},
  subtype: null,
  text: "This is a title"
};

storiesOf("Title", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Title element={sampleTitleElement} />)
  .add("With custom styles", () => <Title element={sampleTitleElement} inlineStyles={{ fontStyle: "italic" }} />);
