import * as React from "react";
import { storiesOf } from "@storybook/react";
import { RelatedStories } from "./related-stories";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../../atoms";

storiesOf("Related Stories", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <RelatedStories />)
  .add("With custom heading", () => <RelatedStories heading="You might also like" />)
  .add("With aspect ratio", () => <RelatedStories aspectRatio={[4, 3]} />);
