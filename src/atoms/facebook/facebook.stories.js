import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Facebook } from "./facebook";

const postSrc = "https://www.facebook.com/ParksCanada/posts/1712989015384373";

storiesOf("Facebook", module)
  .add("Post with 16:9 responsive (default) layout", () => <Facebook data-href={postSrc}></Facebook>)
  .add("Post with fixed (custom) layout", () => (
    <Facebook
      width="200"
      height="200"
      layout="fixed"
      data-href={postSrc}
    />
  ))
  .add("facebook video", () => (
    <Facebook
      data-embed-as="video"
      data-href="https://www.facebook.com/nasaearth/videos/10155187938052139"
    />
  ))
  .add("facebook comment", () => (
    <Facebook
      data-embed-type="comment"
      data-href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185"
    />
  ))
