import { storiesOf } from "@storybook/react";
import { GenericStory } from "./generic-story";
import { storyWithManyJsEmbeds, config, textStory } from "../../__fixtures__";
import { allElementsStory } from "../../__fixtures__/all-element-story.fixture";

storiesOf("Generic Story", module)
  .add("Story with JS Embeds", () => {
    const { template } = GenericStory({ story: storyWithManyJsEmbeds, config });
    return template;
  })
  .add("Generic Text Story", () => {
    const { template } = GenericStory({ story: textStory, config });
    return template;
  })
  .add("All Elements Story", () => {
    const { template } = GenericStory({ story: allElementsStory, config });
    return template;
  });
