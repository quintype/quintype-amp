import React from "react";
import { Layout, StoryElement } from "../../atoms";

const sampleTextStory = ({ story, config }) => {
  return (
    <Layout story={story} config={config}>
      <h1>Sample Text Story</h1>
      <StoryElement element={story.cards[0]["story-elements"][0]} />
    </Layout>
  );
};

export { sampleTextStory };
