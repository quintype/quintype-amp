import * as React from "react";
import { storiesOf } from "@storybook/react";
import { TextStory } from "./text-story";
import { storyWithManyJsEmbeds, config, textStory } from "../../__fixtures__";

storiesOf("Text Story", module)
  .addDecorator((story) => <div style={{ padding: "0 12px", maxWidth: "700px", margin: "0 auto" }}>{story()}</div>)
  .add("Story with JS Embeds", () => <TextStory story={storyWithManyJsEmbeds} config={config} />)
  .add("Text Story", () => <TextStory story={textStory} config={config} />);
