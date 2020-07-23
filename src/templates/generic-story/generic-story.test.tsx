import React from "react";
import { shallow } from "enzyme";
import { GenericStory } from "./generic-story";
import { InfiniteScroll } from "../../atoms";
import { textStory, config } from "../../__fixtures__";

describe("GenericStory Template", () => {
  it("should render", () => {
    const wrapper = shallow(<GenericStory story={textStory} config={config} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render infinite scroll component if exists", () => {
    const wrapper = shallow(<GenericStory story={textStory} config={config} />);
    expect(wrapper.find(InfiniteScroll).length).toBe(1);
  });
  it("should not render infinite scroll component if infinite-scroll-collection-id not passed in ampconfig", () => {
    const modifiedConfig = { ...config };
    modifiedConfig.opts = {};
    const wrapper = shallow(<GenericStory story={textStory} config={modifiedConfig} />);
    expect(wrapper.find(InfiniteScroll).length).toBe(0);
    expect(wrapper.find("amp-next-page").length).toBe(0);
  });
  it("should add attribute 'next-page-hide' when infinite scroll is enabled", () => {
    const wrapper = shallow(<GenericStory story={textStory} config={config} />);
    expect(
      wrapper
        .find(InfiniteScroll)
        .find("div")
        .prop("next-page-hide")
    ).toBe("true");
  });
});