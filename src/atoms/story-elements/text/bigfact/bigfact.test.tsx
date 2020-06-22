import React from "react";
import { Bigfact, BigfactBase } from "./bigfact";
import { shallow } from "enzyme";
import { config, textStory } from "../../../../__fixtures__";

const sampleBigfactElement = {
  description: "",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/0ee36b0b-fa30-4e84-9d1e-d3b26edb2524",
  type: "text",
  "family-id": "ff2ae3dc-b738-428a-9dff-880c1879b686",
  title: "",
  id: "0ee36b0b-fa30-4e84-9d1e-d3b26edb2524",
  metadata: {
    content: "124567",
    attribution: "Cases of Covid-19 worldwide"
  },
  subtype: "bigfact",
  text:
    '<div><div class="bigfact-title">124567</div><div class="bigfact-description">Cases of Covid-19 worldwide</div></div>'
};

describe("Bigfact", () => {
  it("should render Bigfact element", () => {
    const wrapper = shallow(<Bigfact element={sampleBigfactElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should call bigfactElementRender prop when passed to opts", () => {
    const bigfactElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { ...config.opts, storyElementRender: { bigfactElementRender } } };
    const wrapper = shallow(<BigfactBase element={sampleBigfactElement} story={textStory} config={modifiedConfig} />);
    expect(bigfactElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find("div").length).toBe(0);
  });
});
