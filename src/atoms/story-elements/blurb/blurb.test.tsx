import React from "react";
import { Blurb } from "./blurb";
import { shallow, mount } from "enzyme";

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
    const wrapper = shallow(<Blurb element={sampleBlurbElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render without metadata", () => {
    const wrapper = shallow(<Blurb element={sampleBlurbElementWithoutMetadata} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render default with custom styles", () => {
    const wrapper = mount(<Blurb element={sampleBlurbElement} inlineStyles={{ color: "red" }} />);
    expect(wrapper.find("blockquote").prop("style")).toStrictEqual({ color: "red" });
  });
});
