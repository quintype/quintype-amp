import * as React from "react";
import { storiesOf } from "@storybook/react";
import { TextStory } from "./text-story";
import { storyWithManyJsEmbeds } from "../../__fixtures__/story.fixture";
import { config } from "../../__fixtures__/config.fixture";

storiesOf("Text Story", module)
  .addDecorator((story) => <div style={{ padding: "0 12px", maxWidth: "700px", margin: "0 auto" }}>{story()}</div>)
  .add("default", () => <TextStory story={storyWithManyJsEmbeds} config={config} />);
