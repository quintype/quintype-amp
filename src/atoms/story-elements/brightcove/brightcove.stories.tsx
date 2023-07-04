import React from "react";
import { storiesOf } from "@storybook/react";
import { Brightcove } from "./brightcove";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";

const sampleBrightcoveElement = {
  description: "",
  "page-url": "/story/b7b6ecab-2b4f-4dc1-b04a-0b0ec76a50c4/element/2cfc6b4e-85fb-47b0-ae4e-580a650372f7",
  type: "external-file",
  "family-id": "0148ec01-3c7c-49ee-8a3f-db8ca4907dc8",
  title: "",
  "file-type": "video",
  id: "2cfc6b4e-85fb-47b0-ae4e-580a650372f7",
  url: null,
  "content-type": "video/brightcove",
  metadata: {
    "account-id": "1752604059001",
    "player-id": "default",
    "player-media": "default",
    "video-id": "6156696074001",
    "embed-code":
      "aHR0cHM6Ly9wbGF5ZXJzLmJyaWdodGNvdmUubmV0LzI3NjY2MjQ5MDUwMDEvZGVmYXVsdF9kZWZhdWx0L2luZGV4Lmh0bWw/dmlkZW9JZD02MzIzMDIxNjcxMTEy",
    "player-url": "//players.brightcove.net/2766624905001/default_default/index.html?videoId=6323021671112"
  },
  subtype: "brightcove-video"
};

const { metadata, ...sampleBrightcoveElementWithoutMetadata } = sampleBrightcoveElement;

storiesOf("Brightcove Element", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <Brightcove element={sampleBrightcoveElement} />)
  .add("With a square different layout", () => (
    <Brightcove element={sampleBrightcoveElement} layout="fixed" width="400" height="400" />
  ))
  .add("Brightcove without metadata", () => <Brightcove element={sampleBrightcoveElementWithoutMetadata} />);
