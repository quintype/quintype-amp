import React from "react";
import { BlurbBase, DefaultBlurb } from "./blurb";
import { shallow, mount } from "enzyme";
import { Theme } from "../../../context/theme";
import { config, textStory } from "../../../__fixtures__";

const sampleBlurbElement = {
  description: "",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/19d96101-04b2-400a-ab95-e7362280d8a1",
  type: "text",
  "family-id": "5f761f27-4721-459f-8ecd-733021d8d2ea",
  title: "",
  id: "19d96101-04b2-400a-ab95-e7362280d8a1",
  metadata: {
    content:
      "In general—and this is a good P.S.A. reminder for everyone—if you are symptomatic, you are supposed to stay home for seven days, or three days past whenever your symptoms resolve, whichever one of those is longest."
  },
  subtype: "blurb",
  text:
    "<blockquote>In general—and this is a good P.S.A. reminder for everyone—if you are symptomatic, you are supposed to stay home for seven days, or three days past whenever your symptoms resolve, whichever one of those is longest.</blockquote>"
};

const { metadata, ...sampleBlurbElementWithoutMetadata } = sampleBlurbElement;

describe("Blurb", () => {
  it("should render default", () => {
    const wrapper = shallow(<DefaultBlurb element={sampleBlurbElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render without metadata", () => {
    const wrapper = shallow(<DefaultBlurb element={sampleBlurbElementWithoutMetadata} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render default with custom styles", () => {
    const wrapper = mount(
      <Theme>
        <DefaultBlurb element={sampleBlurbElement} inlineStyles={{ color: "red" }} />
      </Theme>
    );
    expect(wrapper.find("blockquote").prop("style")).toStrictEqual({ color: "red" });
  });
  it("should call storyElementRender prop when passed to opts", () => {
    const storyElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { ...config.opts, storyElementRender } };
    const wrapper = shallow(<BlurbBase element={sampleBlurbElement} story={textStory} config={modifiedConfig} />);
    expect(storyElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find(DefaultBlurb).length).toBe(0);
  });
});
