import * as React from "react";
import { storiesOf } from "@storybook/react";
import { QAndA } from "./q-and-a";
import { config, textStory } from "../../../../__fixtures__";
import { Layout } from "../../../layout";

const sampleQAndAElement = {
  description: "",
  "page-url": "/story/8c99ab25-1df2-4739-9bac-5b580ad5c337/element/022dbe70-c654-49f1-ab5b-bf5c9b80fd19",
  type: "text",
  "family-id": "bd3f685e-849a-49ad-b09c-ea7580b06f9d",
  title: "",
  id: "022dbe70-c654-49f1-ab5b-bf5c9b80fd19",
  metadata: {
    question: "<p>this is a q&amp;a element question</p>",
    answer: "<p>this is a q&amp;a element answer</p>"
  },
  subtype: "q-and-a",
  text:
    '<div><div class="question"><p>this is a q&amp;a element question</p></div><div class="answer"><p>this is a q&amp;a element answer</p></div></div>'
};

storiesOf("QAndA", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <QAndA element={sampleQAndAElement} />);
