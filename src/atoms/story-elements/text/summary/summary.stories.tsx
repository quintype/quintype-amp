import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Summary } from "./summary";
import { config, allElementsStory } from "../../../../__fixtures__";
import { Layout } from "../../../layout";

const sampleSummaryElement = {
  description: "",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/77b3c9df-2821-4587-a952-d6c14879b1df",
  type: "text",
  "family-id": "cda34053-40da-4aa5-854c-fe43d3e634ed",
  title: "",
  id: "77b3c9df-2821-4587-a952-d6c14879b1df",
  metadata: {},
  subtype: "summary",
  text:
    "<p>In general—and this is a good P.S.A. reminder for everyone—if you are symptomatic, you are supposed to stay home for seven days, or three days past whenever your symptoms resolve, whichever one of those is longest. [If you have been in close contact with a person who has tested positive and you are asymptomatic, experts recommend staying home for fourteen days after that contact.] If I don’t get tested, I’ll stay home for seven days. But if I do get tested and I test negative, I could go back.</p>"
};

storiesOf("Summary", module)
  .addDecorator((story) => (
    <Layout story={allElementsStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Summary element={sampleSummaryElement} />);
