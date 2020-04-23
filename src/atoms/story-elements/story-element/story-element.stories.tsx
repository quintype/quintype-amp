import * as React from "react";
import { storiesOf } from "@storybook/react";
import { StoryElement } from "./story-element";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";

storiesOf("Story Element", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Text Element", () => (
    // tslint:disable-next-line:jsx-no-lambda
    <StoryElement setInvalidBanner={() => null} element={textStory.cards[1]["story-elements"][0]} />
  ));
