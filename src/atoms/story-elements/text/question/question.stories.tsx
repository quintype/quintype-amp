import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Question } from "./question";
import { config, textStory } from "../../../../__fixtures__";
import { Layout } from "../../../layout";

const sampleQuestionElement = {
  description: "",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/40f27611-f0d0-4e4d-853a-f36c595ee21f",
  type: "text",
  "family-id": "0668dc6d-ffea-45a6-8531-5403fdf0a8e8",
  title: "",
  id: "40f27611-f0d0-4e4d-853a-f36c595ee21f",
  metadata: {},
  subtype: "question",
  text: "<p><strong>You have a patient on Rikers who is older than ninety?</strong></p>"
};

storiesOf("Question", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Question element={sampleQuestionElement} />);
