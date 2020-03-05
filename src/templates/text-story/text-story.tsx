import React from "react";
import { Layout } from "../../atoms";
import { HeroImage } from "../../molecules";

const TextStory = ({ story, config }) => {
  return (
    <Layout story={story} config={config}>
      <HeroImage />
      <h1>This is a text story</h1>
    </Layout>
  );
};

export { TextStory };
