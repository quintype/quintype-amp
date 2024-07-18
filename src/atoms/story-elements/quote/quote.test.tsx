import React from "react";
import { QuoteBase, DefaultBlockQuote, FallbackBlockQuote } from "./quote";
import { shallow } from "enzyme";
import { textStory, config } from "../../../__fixtures__";

const sampleQuoteElement = {
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

const { metadata, ...sampleQuoteElementWithoutMetadata } = sampleQuoteElement;

describe("BlockQuote", () => {
  it("should render default", () => {
    const wrapper = shallow(<DefaultBlockQuote element={sampleQuoteElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render FallbackBlockQuote if metadata doesn't exist", () => {
    const wrapper = shallow(<DefaultBlockQuote element={sampleQuoteElementWithoutMetadata} />);
    expect(wrapper.find(FallbackBlockQuote).length).toBe(1);
  });
  it("should call quoteRender prop when passed to opts", () => {
    const quoteRender = jest.fn();
    const modifiedConfig = {
      ...config,
      opts: { render: { storyElementRender: { quoteRender } } }
    };
    const wrapper = shallow(<QuoteBase element={sampleQuoteElement} story={textStory} config={modifiedConfig} />);
    expect(quoteRender.mock.calls.length).toBe(1);
    expect(wrapper.find(DefaultBlockQuote).length).toBe(0);
  });
});
