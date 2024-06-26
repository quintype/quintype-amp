import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Image } from "./image";
import { textStory, config } from "../../__fixtures__";
import { Layout } from "../layout";
import get from "lodash.get";

const metadata = get(textStory, "hero-image-metadata");
const s3key = get(textStory, "hero-image-s3-key");
const altText = get(textStory, "hero-image-alt-text");
const aspectRatio = [16, 9];

storiesOf("Image", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("layout responsive", () => {
    return <Image metadata={metadata} slug={s3key} alt={altText} />;
  })
  .add("layout responsive with aspect ratio specified", () => {
    return <Image metadata={metadata} slug={s3key} alt={altText} aspectRatio={aspectRatio} />;
  })
  .add("layout fixed-height", () => (
    <Image
      layout={"fixed-height"}
      metadata={metadata}
      slug={s3key}
      aspectRatio={aspectRatio}
      height={"100"}
      alt={altText}
    />
  ))
  .add("layout fixed-height with focus point at 0,0", () => {
    metadata["focus-point"] = [0, 0];
    return (
      <Image
        layout={"fixed-height"}
        metadata={metadata}
        slug={s3key}
        aspectRatio={aspectRatio}
        height={"100"}
        alt={altText}
      />
    );
  })
  .add("layout fixed-height with focus point at bottom right", () => {
    metadata["focus-point"] = [5472, 3648];
    return (
      <Image
        layout={"fixed-height"}
        metadata={metadata}
        slug={s3key}
        aspectRatio={aspectRatio}
        height={"100"}
        alt={altText}
      />
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
        height={"500"}
        alt={altText}
      />
    );
  })
  .add("layout nodisplay", () => {
    return <Image layout={"nodisplay"} metadata={metadata} slug={s3key} aspectRatio={aspectRatio} alt={altText} />;
  })
  .add("layout fill", () => {
    return (
      <div style={{ width: "250px", height: "250px", position: "relative" }}>
        <Image layout={"fill"} metadata={metadata} slug={s3key} aspectRatio={aspectRatio} alt={altText} />
      </div>
    );
  })
  .add("Without lightbox", () => {
    return <Image metadata={metadata} slug={s3key} alt={altText} lightbox={false} />;
  })
  .add("Lightbox with value 'hero'", () => {
    return <Image metadata={metadata} slug={s3key} alt={altText} lightbox="hero" />;
  });
