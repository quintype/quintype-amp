import * as React from "react";
import { storiesOf } from "@storybook/react";
import { RelatedStoryCard } from "./related-story-card";
import { Layout } from "../../atoms";
import { relatedStories } from "../../__fixtures__/related-stories";
import { config, textStory } from "../../__fixtures__";

const sampleRelatedStory = relatedStories["related-stories"][0];
const relatedStoryEithoutHeroImage = relatedStories["related-stories"][1];

storiesOf("Related Story Card", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <RelatedStoryCard aspectRatio={[16, 9]} fallbackSrc="" story={sampleRelatedStory} />)
  .add("Without HeroImage", () => (
    <RelatedStoryCard
      aspectRatio={[16, 9]}
      story={relatedStoryEithoutHeroImage}
      fallbackSrc="https://gumlet.assettype.com/quintype-demo%2F2019-02%2Fae4829d6-e230-4d66-9b88-2a4db87a2060%2F64778.jpg?w=640&auto=format%2Ccompress"
    />
  ))
  .add("Without HeroImage & without fallback src", () => (
    <RelatedStoryCard aspectRatio={[16, 9]} fallbackSrc="" story={relatedStoryEithoutHeroImage} />
  ));
