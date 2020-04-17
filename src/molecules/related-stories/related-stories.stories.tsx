import * as React from "react";
import { storiesOf } from "@storybook/react";
import { RelatedStories } from "./related-stories";
import { config, textStory, relatedStories } from "../../__fixtures__";
import { Layout } from "../../atoms";
import get from "lodash.get";

const relatedStoriesArr = get(relatedStories, "related-stories", []);

storiesOf("Related Stories", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <RelatedStories stories={relatedStoriesArr} />);
