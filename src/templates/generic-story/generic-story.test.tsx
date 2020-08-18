import React from "react";
import { shallow } from "enzyme";
import { GenericStory } from "./generic-story";
import { InfiniteScroll, Subscription } from "../../atoms";
import { textStory, config } from "../../__fixtures__";
import { TopAd, BottomAd } from "../../molecules/ads";

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
  it("should render subscriptions if exists", () => {
    const wrapper = shallow(<GenericStory story={textStory} config={config} />);
    expect(wrapper.find(Subscription).length).toBe(1);
  });
  it("should set 'templateName' prop as 'default' for all DFP ads", () => {
    const wrapper = shallow(<GenericStory story={textStory} config={config} />);
    expect(wrapper.find(TopAd).prop("templateName")).toBe("default");
    // expect(wrapper.find(BodyAd).prop("templateName")).toBe("default");
    expect(wrapper.find(BottomAd).prop("templateName")).toBe("default");
  });
});
