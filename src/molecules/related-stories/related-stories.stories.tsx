import * as React from "react";
import { storiesOf } from "@storybook/react";
import { RelatedStories } from "./related-stories";
import { config, textStory, relatedStoriesObj } from "../../__fixtures__";
import { Layout } from "../../atoms";
import get from "lodash.get";

const relatedStories = get(relatedStoriesObj, "related-stories", []);

storiesOf("Related Stories", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <RelatedStories stories={relatedStories} />)
  .add("With custom heading", () => <RelatedStories stories={relatedStories} heading="You might also like" />)
  .add("With fallback image src and aspect ratio", () => (
    <RelatedStories
      stories={relatedStories}
      fallbackSrc="https://gumlet.assettype.com/quintype-demo%2F2019-02%2Fae4829d6-e230-4d66-9b88-2a4db87a2060%2F64778.jpg?w=640&auto=format%2Ccompress"
      aspectRatio={[4, 3]}
    />
  ));
