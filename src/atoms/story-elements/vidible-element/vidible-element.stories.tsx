import React from "react";
import { storiesOf } from "@storybook/react";
import { VidibleElement } from "./vidible-element";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";

const sampleVidibleElement = {
  description: "",
  "embed-js":
    "PGRpdiBjbGFzcz0idmRiX3BsYXllciB2ZGJfNTliZjVhMzQ4NWViNDI2YWMyOGNkNGU2NTZkNWY3OTVlNGIwY2VmMDNhNmNjZTdjIiB2ZGJfcGFyYW1zPSJtLnBsYXliYWNrPWNsaWNrIj4KICAgICAgICA8c2NyaXB0IHR5cGU9J3RleHQvamF2YXNjcmlwdCcgc3JjPSJodHRwczovL2RlbGl2ZXJ5LnZpZGlibGUudHYvanNvbnAvcGlkPTU5YmY1YTM0ODVlYjQyNmFjMjhjZDRlNi92aWQ9NWU0MmQ2YzE4YzNhZTgyOTQwMWE5ZWE1LzU2ZDVmNzk1ZTRiMGNlZjAzYTZjY2U3Yy5qcz9tLnBsYXliYWNrPWNsaWNrIj4KCTwvc2NyaXB0PgogICA8L2Rpdj4=",
  "page-url": "/story/cf57a925-f97b-4d38-bb1c-f6341ef40f88/element/e59dd65a-a413-400c-b436-26979d444ca6",
  type: "jsembed",
  "family-id": "7b2b4e43-2942-4c18-b34c-78e4abceb515",
  title: "",
  id: "e59dd65a-a413-400c-b436-26979d444ca6",
  metadata: {
    "vidible-video-id": "5e42d6c18c3ae829401a9ea5",
    "duration-millis": 515158,
    "player-url":
      "https://delivery.vidible.tv/htmlembed/pid=59bf5a3485eb426ac28cd4e6/56d5f795e4b0cef03a6cce7c.html?vid=5e42d6c18c3ae829401a9ea5",
    "include-in-video-sitemap": true
  },
  subtype: "vidible-video"
};

const { metadata, ...sampleVidibleElementWithoutMetadata } = sampleVidibleElement;

storiesOf("Vidible Element", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <VidibleElement element={sampleVidibleElement} />)
  .add("With a square different layout", () => (
    <VidibleElement element={sampleVidibleElement} layout="fixed" width="400" height="400" />
  ))
  .add("Vidible without metadata", () => <VidibleElement element={sampleVidibleElementWithoutMetadata} />);
