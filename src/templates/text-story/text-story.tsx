import React from "react";
import { Layout } from "../../atoms";
import { textStory } from "../../__fixtures__/story.fixture";

const TextStory = ({ story = textStory }: any) => {
  return (
    <Layout story={story}>
      <h1>This is a text story</h1>
    </Layout>
  );
};

export { TextStory };
