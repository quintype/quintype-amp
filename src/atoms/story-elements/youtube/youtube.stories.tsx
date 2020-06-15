import React from "react";
import { storiesOf } from "@storybook/react";
import { YouTube } from "./youtube";
import { textStory, config } from "../../../__fixtures__";
import { Layout } from "../../layout";

const sampleYouTubeElement = {
  description: "",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/2a3f1e74-df4b-4c8e-99de-57a69366b77f",
  type: "youtube-video",
  "family-id": "8256f5d1-5703-4c3f-8fc0-a6c4f44e531c",
  title: "",
  id: "2a3f1e74-df4b-4c8e-99de-57a69366b77f",
  url: "https://www.youtube.com/watch?v=jlEbFvGwcUc",
  "embed-url": "https://www.youtube.com/embed/jlEbFvGwcUc",
  metadata: {},
  subtype: null
};

storiesOf("Youtube", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <YouTube element={sampleYouTubeElement} />)
  .add("with custom styles", () => (
    <YouTube
      element={sampleYouTubeElement}
      inlineStyles={{
        border: "2px solid red"
      }}
    />
  ));
