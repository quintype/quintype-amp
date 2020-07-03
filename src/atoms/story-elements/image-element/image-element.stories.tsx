import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ImageElement } from "./image-element";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";

const sampleImageElement = {
  description: "",
  "image-metadata": {
    "original-url":
      "https://media.npr.org/assets/img/2020/03/20/handwashing-8_wide-eb1f71948877c7a15d27a82cd7d90b324b956a89.jpg?s=1400",
    width: 1400,
    height: 787
  },
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/2c31b5ad-0189-4bad-841e-e105d738ca80",
  type: "image",
  "family-id": "c608c12f-f45b-4266-8a60-9de857ee92fd",
  "image-attribution": "Someone ",
  title: "Wash your hands",
  id: "2c31b5ad-0189-4bad-841e-e105d738ca80",
  "image-s3-key":
    "ace/2020-03/ad503d63-4d05-41e6-9722-fdfe3acb2405/handwashing_8_wide_eb1f71948877c7a15d27a82cd7d90b324b956a89.jpg",
  metadata: {},
  subtype: null
};

const sampleImageElementWithNoCaption = { ...sampleImageElement, title: "" };
const sampleImageElementWithCaptionInsideHTMLTag = { ...sampleImageElement, title: "<p>Wash your hands</p>" };
storiesOf("Image Element", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default Image Element", () => <ImageElement element={sampleImageElement} />)
  .add("Image Element without caption", () => <ImageElement element={sampleImageElementWithNoCaption} />)
  .add("Image Element without caption inside HTML Tag", () => (
    <ImageElement element={sampleImageElementWithCaptionInsideHTMLTag} />
  ));
