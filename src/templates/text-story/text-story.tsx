import React from "react";
import { storyWithManyJsEmbeds } from "../../__fixtures__/story.fixture";
import { config as storyConfig } from "../../__fixtures__/config.fixture";
import { Layout } from "../../atoms";
import { HeroImage } from "../../molecules/story-elements";

const TextStory = ({ story = storyWithManyJsEmbeds, config = storyConfig }: any) => {
  return (
    <Layout story={story} config={config}>
      <HeroImage />
      <h1>This is a text story</h1>
    </Layout>
  );
};

export { TextStory };
