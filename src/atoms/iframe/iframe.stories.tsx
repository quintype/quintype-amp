import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Iframe } from "./iframe";

const postSrc = "https://codepen.io/rvgpl/embed/qXGqKm?height=265&theme-id=dark&default-tab=css,result";

storiesOf("Iframe", module)
  .addDecorator((story) => (
    <div>
      <div style={{ height: "600px", display: "grid", placeItems: "center" }}>
        Amp iframe can't render 600px of the viewport, please scroll.
      </div>
      {story()}
    </div>
  ))
  .add("Post with 16:9 responsive (default) layout", () => <Iframe src={postSrc} />)
  .add("Post with fixed (custom) layout", () => <Iframe width="400" height="400" layout="fixed" src={postSrc} />)
  .add("Post with custom style", () => <Iframe src={postSrc} inlineStyles={{ border: "5px solid red" }} />);
