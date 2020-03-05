import * as React from "react";
import { storiesOf } from "@storybook/react";
import { TextStory } from "./text-story";

storiesOf("Text Story", module)
  .addDecorator((story) => <div style={{ padding: "0 12px", maxWidth: "700px", margin: "0 auto" }}>{story()}</div>)
  .add("default", () => <TextStory />);
