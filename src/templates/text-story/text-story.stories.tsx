import * as React from "react";
import { storiesOf } from "@storybook/react";
import { TextStory } from "./text-story";
import { storyWithManyJsEmbeds, config, textStory, relatedStoriesObj } from "../../__fixtures__";
import { allElementsStory } from "../../__fixtures__/all-element-story.fixture";
import get from "lodash.get";

const relatedStories = get(relatedStoriesObj, "related-stories", []);

storiesOf("Text Story", module)
  .addDecorator((story) => <div>{story()}</div>)
  .add("Story with JS Embeds", () => (
    <TextStory relatedStories={relatedStories} story={storyWithManyJsEmbeds} config={config} />
  ))
  .add("Text Story", () => <TextStory relatedStories={relatedStories} story={textStory} config={config} />)
  .add("All Elements Story", () => (
    <TextStory relatedStories={relatedStories} story={allElementsStory} config={config} />
  ));
