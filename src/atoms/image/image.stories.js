import * as React from "react";
import { storiesOf } from "@storybook/react";
import Image from "./image";
import { textStory } from "../../__fixtures__/story.fixture";
import { publisherConfig } from "../../__fixtures__/config.fixture";
import Layout from "../layout";
import _ from "lodash";

storiesOf("Image", module)
  .addDecorator((story) => <Layout config={publisherConfig}>{story()}</Layout>)
  .add("responsive", () => {
    const metadata = _.get(textStory, "hero-image-metadata");
    const s3key = _.get(textStory, "hero-image-s3-key");
    const aspectRatio = [16, 9];
    return <Image metadata={metadata} imgSlug={s3key} aspectRatio={aspectRatio} ></Image>
  })
  .add("fixed-height", () => {
    const metadata = {
      width: 5472,
      height: 3648,
      "mime-type": "image/jpeg",
      "file-size": 6127839,
      "file-name": "LSAC Launches New Initiatives to Support Law School Enrollment Efforts in India.JPG",
      "focus-point": [0,0]
    }
    const s3key = _.get(textStory, "hero-image-s3-key");
    const aspectRatio = [16, 9];
    return <Image
      layout={"fixed-height"}
      metadata={metadata}
      imgSlug={s3key}
      aspectRatio={aspectRatio}
      width={"500"}
      height={"100"}
      ></Image>
  })
  .add("fixed", () => {
    const metadata = {
      width: 5472,
      height: 3648,
      "mime-type": "image/jpeg",
      "file-size": 6127839,
      "file-name": "LSAC Launches New Initiatives to Support Law School Enrollment Efforts in India.JPG",
      "focus-point": [5472,3648]
    }
    const s3key = _.get(textStory, "hero-image-s3-key");
    const aspectRatio = [16, 9];
    return <Image
      layout={"fixed"}
      metadata={metadata}
      imgSlug={s3key}
      aspectRatio={aspectRatio}
      width={"500"}
      height={"500"}
      ></Image>
  });
