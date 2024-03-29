import React from "react";
import { BlockQuoteBase, DefaultBlockQuote, FallbackBlockQuote } from "./blockquote";
import { shallow } from "enzyme";
import { textStory, config } from "../../../__fixtures__";
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
  it("should render FallbackBlockQuote if metadata doesn't exist", () => {
    const wrapper = shallow(<DefaultBlockQuote element={sampleBlockQuoteElementWithoutMetadata} />);
    expect(wrapper.find(FallbackBlockQuote).length).toBe(1);
  });
  it("should call blockquoteRender prop when passed to opts", () => {
    const blockquoteRender = jest.fn();
    const modifiedConfig = {
      ...config,
      opts: { render: { storyElementRender: { blockquoteRender } } }
    };
    const wrapper = shallow(
      <BlockQuoteBase element={sampleBlockQuoteElement} story={textStory} config={modifiedConfig} />
    );
    expect(blockquoteRender.mock.calls.length).toBe(1);
    expect(wrapper.find(DefaultBlockQuote).length).toBe(0);
  });
});
