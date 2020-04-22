import React from "react";
import { storiesOf } from "@storybook/react";
import { DailyMotionElement } from "./daily-motion-element";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";

const sampleDailyMotionElement = {
  description: "",
  "embed-js":
    "PGlmcmFtZSBmcmFtZWJvcmRlcj0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNjAiIHNyYz0iaHR0cHM6Ly93d3cuZGFpbHltb3Rpb24uY29tL2VtYmVkL3ZpZGVvL3g3dDluMTMiIGFsbG93ZnVsbHNjcmVlbiBhbGxvdz0iYXV0b3BsYXkiPjwvaWZyYW1lPg==",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/89d43010-36f3-427b-a344-ef1630dc9745",
  type: "jsembed",
  "family-id": "0c2c5683-37c5-4cbf-b51f-0fe43f408a23",
  title: "",
  id: "89d43010-36f3-427b-a344-ef1630dc9745",
  metadata: {
    "dailymotion-url": "https://www.dailymotion.com/video/x7t9n13",
    provider: "dailymotion-video",
    "video-id": "x7t9n13"
  },
  subtype: "dailymotion-video"
};

const { metadata, ...sampleDailyMotionElementWithoutMetadata } = sampleDailyMotionElement;

storiesOf("Daily Motion Element", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <DailyMotionElement element={sampleDailyMotionElement} />)
  .add("With a square different layout", () => (
    <DailyMotionElement element={sampleDailyMotionElement} layout="fixed" width="400" height="400" />
  ))
  .add("DailyMotion without metadata", () => <DailyMotionElement element={sampleDailyMotionElementWithoutMetadata} />);
