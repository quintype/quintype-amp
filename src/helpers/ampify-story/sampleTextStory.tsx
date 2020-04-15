import React from "react";
import { Layout, StoryElement } from "../../atoms";

const doNothing = () => null;

const sampleTextStory = ({ story, config }) => {
  return (
    <Layout story={story} config={config}>
      <h1>Sample Text Story</h1>
      <StoryElement setInvalidBanner={doNothing} element={story.cards[0]["story-elements"][0]} />
    </Layout>
  );
};

export { sampleTextStory };
