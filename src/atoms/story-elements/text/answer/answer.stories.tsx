import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Answer } from "./answer";
import { config, allElementsStory } from "../../../../__fixtures__";
import { Layout } from "../../../layout";

const sampleAnswerElement = {
  description: "",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/19a1acd5-3777-491d-af15-9032ce5cd69b",
  type: "text",
  "family-id": "4117ebe1-ebf4-4d8b-bf72-2acd23c98a92",
  title: "",
  id: "19a1acd5-3777-491d-af15-9032ce5cd69b",
  metadata: {},
  subtype: "answer",
  text:
    "<p>Yes. This is a guy currently being held in pretrial detention. I have multiple patients in their eighties. I have patients who are A.D.L.-impaired—which means that they cannot attend to their own activities of daily living and would be nursing-home- or assisted-living-eligible if they were in the community—who need daily assistance with really basic tasks like toileting and changing themselves. I have patients who are paraplegic with significant wounds that require daily wound care. I have multiple patients who have active cancer and are getting chemotherapy and are both sick and immunosuppressed from their medication.</p>"
};
storiesOf("Answer", module)
  .addDecorator((story) => (
    <Layout story={allElementsStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Answer element={sampleAnswerElement} />);
