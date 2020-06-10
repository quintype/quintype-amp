import * as React from "react";
import { storiesOf } from "@storybook/react";
import { O2Player } from "./o2-player";

storiesOf("O2 Player", module)
  .add("Default ", () => (
    <O2Player
      data-pid="59bf5a3485eb426ac28cd4e6"
      data-bcid="56d5f795e4b0cef03a6cce7c"
      data-vid="5e42d6c18c3ae829401a9ea5"
    />
  ))
  .add("Post with fixed (custom) layout", () => (
    <O2Player
      data-pid="59bf5a3485eb426ac28cd4e6"
      data-bcid="56d5f795e4b0cef03a6cce7c"
      data-vid="5e42d6c18c3ae829401a9ea5"
      width="200"
      height="200"
      layout="fixed"
    />
  ))
  .add("Post with macros", () => (
    <O2Player
      data-pid="59bf5a3485eb426ac28cd4e6"
      data-bcid="56d5f795e4b0cef03a6cce7c"
      data-vid="5e42d6c18c3ae829401a9ea5"
      data-macros="m.playback=click"
    />
  ))
  .add("Post with custom styles", () => (
    <O2Player
      data-pid="59bf5a3485eb426ac28cd4e6"
      data-bcid="56d5f795e4b0cef03a6cce7c"
      data-vid="5e42d6c18c3ae829401a9ea5"
      inlineStyles={{ border: "5px solid red" }}
    />
  ));

// vidible-video-id": "5e42d6c18c3ae829401a9ea5",
// // 		"duration-millis": 515158,
// // 		"player-url": "https://delivery.vidible.tv/htmlembed/pid=59bf5a3485eb426ac28cd4e6/56d5f795e4b0cef03a6cce7c.html?vid=5e42d6c18c3ae829401a9ea5",
