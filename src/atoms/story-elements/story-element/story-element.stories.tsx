import * as React from "react";
import { storiesOf } from "@storybook/react";
import { StoryElement } from "./story-element";
import { config, textStory } from "../../../__fixtures__";
import Layout from "../../layout";

storiesOf("Story Element", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Text Element", () => <StoryElement element={textStory.cards[1]["story-elements"][0]} />);
