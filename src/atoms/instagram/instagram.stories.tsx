import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Instagram } from "./instagram";

const instagramPostID = "B_DfYSRJiAf";

storiesOf("Instagram", module)
  .add("Post with 16:9 responsive (default) layout", () => <Instagram data-shortcode={instagramPostID} />)
  .add("Post with fixed (custom) layout", () => (
    <Instagram width="200" height="200" layout="fixed" data-shortcode={instagramPostID} />
  ))
  .add("With caption", () => <Instagram data-shortcode={instagramPostID} data-captioned={true} />)
  .add("Post with 16:9 responsive (default) layout", () => <Instagram data-shortcode={instagramPostID} />)
  .add("Post with custom styles", () => (
    <Instagram data-shortcode={instagramPostID} inlineStyles={{ border: "5px solid red" }} />
  ));
