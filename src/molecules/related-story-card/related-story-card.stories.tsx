import * as React from "react";
import { storiesOf } from "@storybook/react";
import { RelatedStoryCard } from "./related-story-card";
import { Layout } from "../../atoms";
import { relatedStories } from "../../__fixtures__/related-stories";
import { config, textStory } from "../../__fixtures__";

const sampleRelatedStory = relatedStories[0];
const relatedStoryWithoutHeroImage = relatedStories[1];

storiesOf("Related Story Card", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <RelatedStoryCard story={sampleRelatedStory} />)
  .add("Without HeroImage", () => <RelatedStoryCard story={relatedStoryWithoutHeroImage} />)
  .add("Without HeroImage & without fallback src", () => <RelatedStoryCard story={relatedStoryWithoutHeroImage} />);
