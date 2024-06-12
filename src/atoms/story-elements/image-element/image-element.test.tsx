import React from "react";

import { ImageElement, ImageElementBase } from "./image-element";
import { shallow } from "enzyme";
import { config, textStory } from "../../../__fixtures__";

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
  "alt-text": "Handwashing",
  "image-s3-key":
    "ace/2020-03/ad503d63-4d05-41e6-9722-fdfe3acb2405/handwashing_8_wide_eb1f71948877c7a15d27a82cd7d90b324b956a89.jpg",
  metadata: {},
  subtype: null
};

describe("Image Element", () => {
  it("should render amp image", () => {
    const wrapper = shallow(<ImageElement element={sampleImageElement} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should not render fig caption when there is no caption", () => {
    const sampleImageElementWithNoCaption = { ...sampleImageElement, title: "" };
    const wrapper = shallow(<ImageElement element={sampleImageElementWithNoCaption} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should call imageElementRender prop when passed to opts", () => {
    const imageElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { storyElementRender: { imageElementRender } } } };
    const wrapper = shallow(
      <ImageElementBase element={sampleImageElement} story={textStory} config={modifiedConfig} />
    );
    expect(imageElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find(ImageElement).length).toBe(0);
  });
  it("should render fig caption with caption wrapped inside an HTML Tag", () => {
    const sampleImageElementWithHTMLTagCaption = { ...sampleImageElement, title: "<p>Wash your hands</p>" };
    const wrapper = shallow(<ImageElement element={sampleImageElementWithHTMLTagCaption} />);
    expect(wrapper).toMatchSnapshot();
  });
});
