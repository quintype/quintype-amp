import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Twitter } from "./twitter";

const tweetId = "885634330868850689";

storiesOf("Twitter", module)
  .add("Tweet with 390:330 responsive (default) layout", () => <Twitter data-tweetid={tweetId} title="twitter" />)
  .add("Tweet with fixed (custom) layout", () => (
    <Twitter width="200" height="200" layout="fixed" data-tweetid={tweetId} title="twitter" />
  ))
  .add("Tweet with invalid src", () => <Twitter data-tweetid="" title="twitter" />)
  .add("Tweet with placeholder src and a fallback", () => (
    <Twitter data-tweetid={tweetId} title="twitter">
      <div placeholder="true">This is a Placeholder</div>
    </Twitter>
  ))
  .add("Tweet with invalid src and a fallback", () => (
    <Twitter data-tweetid="abcd" title="twitter">
      <div fallback="true">Failed to load tweet, this is a Fallback</div>
    </Twitter>
  ));
