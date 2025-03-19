import React from "react";
import { storiesOf } from "@storybook/react";
import { JwPlayer } from "./jw";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";

const createJwElement = (metadata = {}) => ({
  description: "",
  "page-url": "/story/b347bace-45d8-4b75-9cca-10bd7600b427/element/165a183c-1535-4438-85a4-abf074a40b54",
  type: "external-file",
  "family-id": "655786e1-a0cf-4cc3-8456-8d368c76054d",
  title: "",
  "file-type": "video",
  id: "165a183c-1535-4438-85a4-abf074a40b54",
  url: "//content.jwplatform.com/videos/OIqdGtgX.mp4",
  "content-type": "video/jwplayer",
  metadata,
  subtype: "jwplayer"
});

const sampleJwElement = createJwElement({
  "video-id": "OIqdGtgX",
  "player-id": "w6gmf5Fj",
  "video-url": "//content.jwplatform.com/videos/OIqdGtgX.mp4",
  "thumbnail-url": "//content.jwplatform.com/thumbs/OIqdGtgX.jpg",
  "player-url": "//content.jwplatform.com/players/OIqdGtgX-w6gmf5Fj.html",
  "embed-code": "aHR0cHM6Ly9jZG4uandwbGF5ZXIuY29tL3BsYXllcnMvT0lxZEd0Z1gtdzZnbWY1RmouaHRtbA=="
});

const sampleJwWithoutMetadata = createJwElement();

storiesOf("Jw Element", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <JwPlayer element={sampleJwElement} />) // Displays responsive layout with 16:9 aspect ratio
  .add("With a square different layout", () => (
    <JwPlayer element={sampleJwElement} layout="fixed" width="400" height="400" />
  ))
  .add("Jw without metadata", () => <JwPlayer element={sampleJwWithoutMetadata} />); // Default Jw won't be visible without metadata
