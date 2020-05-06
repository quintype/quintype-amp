import * as React from "react";
import { storiesOf } from "@storybook/react";
import { WebEngage } from "./webengage";
import { Layout } from "../../atoms";
import { textStory, config } from "../../__fixtures__";

storiesOf("Webengage", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <WebEngage />)
  .add("With custom text", () => <WebEngage buttonText="Subscribe!" />)
  .add("With custom attributes", () => <WebEngage buttonText="Subscribe!" width="500px" height="100px" />);
