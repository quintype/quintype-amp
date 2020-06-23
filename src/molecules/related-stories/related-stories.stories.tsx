import * as React from "react";
import { storiesOf } from "@storybook/react";
import { RelatedStories } from "./related-stories";
import { config, textStory, relatedStories } from "../../__fixtures__";
import { Layout } from "../../atoms";

storiesOf("Related Stories", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <RelatedStories stories={relatedStories} />)
  .add("With custom heading", () => <RelatedStories stories={relatedStories} heading="You might also like" />)
  .add("With aspect ratio", () => <RelatedStories stories={relatedStories} aspectRatio={[4, 3]} />);
