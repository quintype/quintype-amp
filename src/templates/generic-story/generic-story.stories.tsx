import * as React from "react";
import { storiesOf } from "@storybook/react";
import { GenericStory } from "./generic-story";
import { storyWithManyJsEmbeds, config, textStory } from "../../__fixtures__";
import { allElementsStory } from "../../__fixtures__/all-element-story.fixture";

storiesOf("Generic Story", module)
  .addDecorator((story) => <div>{story()}</div>)
  .add("Story with JS Embeds", () => <GenericStory story={storyWithManyJsEmbeds} config={config} />)
  .add("Generic Text Story", () => <GenericStory story={textStory} config={config} />)
  .add("Generic Text story with infinite scroll", () => <GenericStory story={textStory} config={config} />)
  .add("All Elements Story", () => <GenericStory story={allElementsStory} config={config} />);
