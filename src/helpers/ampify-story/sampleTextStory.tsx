import React from "react";
import { Layout, StoryElement, Link } from "../../atoms";

const noop = () => null;

const sampleTextStory = ({ story, config }) => {
  return (
    <Layout story={story} config={config}>
      <h1>Sample Text Story</h1>
      <Link rel="canonical" href="." />
      <StoryElement setInvalidBanner={noop} element={story.cards[0]["story-elements"][0]} />
    </Layout>
  );
};

export { sampleTextStory };
