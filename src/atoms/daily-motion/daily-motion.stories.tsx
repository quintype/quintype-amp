import React from "react";
import { storiesOf } from "@storybook/react";
import { DailyMotion } from "./daily-motion";

const videoID = "x7t9n13";
storiesOf("Daily Motion", module)
  .add("Default", () => <DailyMotion data-videoid={videoID} />)
  .add("With a square different layout", () => (
    <DailyMotion data-videoid={videoID} layout="fixed" width="400" height="400" />
  ))
  .add("With autoplay", () => <DailyMotion data-videoid={videoID} autoplay={true} />)
  .add("With custom styles", () => (
    <DailyMotion data-videoid={videoID} autoplay={true} inlineStyles={{ border: "2px solid red" }} />
  ));
