import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "./image";
import { textStory } from "../../__fixtures__/story.fixture";
import { config } from "../../__fixtures__/config.fixture";
import Layout from "../layout";
import _ from "lodash";

const metadata = _.get(textStory, "hero-image-metadata");
const s3key = _.get(textStory, "hero-image-s3-key");
const aspectRatio = [16, 9];

storiesOf("Image", module)
  .addDecorator((story) => <Layout config={config}>{story()}</Layout>)
  .add("layout responsive", () => {
    return <Image metadata={metadata} slug={s3key} aspectRatio={aspectRatio}></Image>;
  })
  .add("layout fixed-height", () => (
    <Image layout={"fixed-height"} metadata={metadata} slug={s3key} aspectRatio={aspectRatio} height={"100"}></Image>
  ))
  .add("layout fixed-height with focus point at 0,0", () => {
    metadata["focus-point"] = [0, 0];
    return (
      <Image layout={"fixed-height"} metadata={metadata} slug={s3key} aspectRatio={aspectRatio} height={"100"}></Image>
    );
  })
  .add("layout fixed-height with focus point at bottom right", () => {
    metadata["focus-point"] = [5472, 3648];
    return (
      <Image layout={"fixed-height"} metadata={metadata} slug={s3key} aspectRatio={aspectRatio} height={"100"}></Image>
    );
  })
  .add("layout fixed", () => {
    return (
      <Image
        layout={"fixed"}
        metadata={metadata}
        slug={s3key}
        aspectRatio={aspectRatio}
        width={"500"}
        height={"500"}></Image>
    );
  })
  .add("layout nodisplay", () => {
    return <Image layout={"nodisplay"} metadata={metadata} slug={s3key} aspectRatio={aspectRatio}></Image>;
  })
  .add("layout fill", () => {
    return (
      <div style={{ width: "250px", height: "250px", position: "relative" }}>
        <Image layout={"fill"} metadata={metadata} slug={s3key} aspectRatio={aspectRatio}></Image>
      </div>
    );
  });
