import React from "react";
import { Layout } from "../../atoms";
import { textStory } from "../../__fixtures__/story.fixture";
import { publisherConfig } from "../../__fixtures__/config.fixture";

const TextStory = ({ story = textStory, config = publisherConfig }: any) => {
  return (
    <Layout story={story} config={config}>
      <h1>This is a text story</h1>
    </Layout>
  );
};

export { TextStory };
