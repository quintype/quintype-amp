import React from "react";
import { BlockQuoteBase, DefaultBlockQuote } from "./blockquote";
import { shallow, mount } from "enzyme";
import { textStory, config } from "../../../__fixtures__";
import { Theme } from "../../../context/theme";
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
    const wrapper = shallow(<DefaultBlockQuote element={sampleBlockQuoteElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render without metadata", () => {
    const wrapper = shallow(<DefaultBlockQuote element={sampleBlockQuoteElementWithoutMetadata} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render default with custom styles", () => {
    const wrapper = mount(
      <Theme>
        <DefaultBlockQuote
          element={sampleBlockQuoteElement}
          wrapperInlineStyles={{ backgroundColor: "ccf" }}
          blockquoteInlineStyles={{ color: "red" }}
          attributionInlineStyles={{ fontStyle: "italic" }}
          fallbackInlineStyles={{ color: "blue" }}
        />
      </Theme>
    );
    expect(
      wrapper
        .find("div")
        .at(0)
        .prop("style")
    ).toStrictEqual({ backgroundColor: "ccf" });
    expect(wrapper.find("blockquote").prop("style")).toStrictEqual({ color: "red" });
    expect(wrapper.find("span").prop("style")).toStrictEqual({ fontStyle: "italic" });
  });
  it("should call blockquoteRender prop when passed to opts", () => {
    const blockquoteRender = jest.fn();
    const modifiedConfig = { ...config, opts: { ...config.opts, blockquoteRender } };
    const wrapper = shallow(
      <BlockQuoteBase element={sampleBlockQuoteElement} story={textStory} config={modifiedConfig} />
    );
    expect(blockquoteRender.mock.calls.length).toBe(1);
    expect(wrapper.find(DefaultBlockQuote).length).toBe(0);
  });
});
