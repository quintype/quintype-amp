import React from "react";

import { ImageElement, ImageElementBase } from "./image-element";
import { shallow, mount } from "enzyme";
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
  it("should render custom styles", () => {
    const wrapper = mount(<ImageElement element={sampleImageElement} inlineStyles={{ border: "2px solid red" }} />);
    expect(wrapper.find("figcaption").prop("style")).toStrictEqual({ border: "2px solid red" });
  });
  it("should call storyElementRender prop when passed to opts", () => {
    const storyElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { ...config.opts, storyElementRender } };
    const wrapper = shallow(
      <ImageElementBase element={sampleImageElement} story={textStory} config={modifiedConfig} />
    );
    expect(storyElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find(Image).length).toBe(0);
  });
});
