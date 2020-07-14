import * as React from "react";
import { storiesOf } from "@storybook/react";
import { GenericStory } from "./generic-story";
import { storyWithManyJsEmbeds, config, textStory, relatedStories } from "../../__fixtures__";
import { allElementsStory } from "../../__fixtures__/all-element-story.fixture";

storiesOf("Generic Story", module)
  .addDecorator((story) => <div>{story()}</div>)
  .add("Story with JS Embeds", () => (
    <GenericStory relatedStories={relatedStories} story={storyWithManyJsEmbeds} config={config} />
  ))
  .add("Generic Text Story", () => <GenericStory relatedStories={relatedStories} story={textStory} config={config} />)
  .add("Generic Text story with infinite scroll", () => (
    <GenericStory
      story={textStory}
      config={config}
      relatedStories={relatedStories}
      infiniteScrollInlineConfig={`[{\"image\":\"https://foo.com/puppies.jpg\",\"title\":\"Puppies Page\",\"url\":\"/puppies\"}]`}
    />
  ))
  .add("All Elements Story", () => (
    <GenericStory relatedStories={relatedStories} story={allElementsStory} config={config} />
  ));
