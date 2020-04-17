import * as React from "react";
import { storiesOf } from "@storybook/react";
import { TextStory } from "./text-story";
import { storyWithManyJsEmbeds, config, textStory, relatedStories } from "../../__fixtures__";
import { allElementsStory } from "../../__fixtures__/all-element-story.fixture";
import get from "lodash.get";

const relatedStoriesArr = get(relatedStories, "related-stories", []);

storiesOf("Text Story", module)
  .addDecorator((story) => <div>{story()}</div>)
  .add("Story with JS Embeds", () => (
    <TextStory relatedStoriesArr={relatedStoriesArr} story={storyWithManyJsEmbeds} config={config} />
  ))
  .add("Text Story", () => <TextStory relatedStoriesArr={relatedStoriesArr} story={textStory} config={config} />)
  .add("All Elements Story", () => (
    <TextStory relatedStoriesArr={relatedStoriesArr} story={allElementsStory} config={config} />
  ));
