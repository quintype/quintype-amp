import React from "react";
import { BlockQuote } from "./blockquote";
import { shallow, mount } from "enzyme";

const sampleBlockQuoteElement = {
  id: "1",
  type: "text",
  subtype: null,
  text: "<div><blockquote>This is a blockquote</blockquote><span class='attribution'>Attribution</span></div>",
  metadata: {
    content:
      "People talk about jails and prisons being incubators for infection. How does that work exactly on Rikers?",
    attribution: "Attribution"
  }
};

const { metadata, ...sampleBlockQuoteElementWithoutMetadata } = sampleBlockQuoteElement;

describe("BlockQuote", () => {
  it("should render default", () => {
    const wrapper = shallow(<BlockQuote element={sampleBlockQuoteElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render without metadata", () => {
    const wrapper = shallow(<BlockQuote element={sampleBlockQuoteElementWithoutMetadata} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render default with custom styles", () => {
    const wrapper = mount(
      <BlockQuote
        element={sampleBlockQuoteElement}
        wrapperInlineStyles={{ backgroundColor: "ccf" }}
        blockquoteInlineStyles={{ color: "red" }}
        attributionInlineStyles={{ fontStyle: "italic" }}
        fallbackInlineStyles={{ color: "blue" }}
      />
    );
    expect(wrapper.find("div").prop("style")).toStrictEqual({ backgroundColor: "ccf" });
    expect(wrapper.find("blockquote").prop("style")).toStrictEqual({ color: "red" });
    expect(wrapper.find("a").prop("style")).toStrictEqual({ fontStyle: "italic" });
    expect(wrapper.find("div").prop("style")).toStrictEqual({ color: "blue" });
  });
});
