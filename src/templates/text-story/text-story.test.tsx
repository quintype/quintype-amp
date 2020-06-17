import React from "react";
import { shallow } from "enzyme";
import { TextStory } from "./text-story";
import { RelatedStories } from "../../molecules";
import { InfiniteScroll } from "../../atoms";
import { textStory, config, relatedStories } from "../../__fixtures__";
import cloneDeep from "lodash.clonedeep";

describe("TextStory Template", () => {
  it("should render", () => {
    const wrapper = shallow(<TextStory story={textStory} config={config} relatedStories={relatedStories} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render related stories component", () => {
    const wrapper = shallow(<TextStory story={textStory} config={config} relatedStories={relatedStories} />);
    expect(wrapper.find(RelatedStories).length).toBe(1);
  });
  it("should render infinite scroll component if exists", () => {
    const modifiedConfig = cloneDeep(config);
    modifiedConfig.ampConfig["related-collection-id"] = "1234"; // !!!! change to infinite-scroll-collection-id later
    const wrapper = shallow(<TextStory story={textStory} config={modifiedConfig} relatedStories={relatedStories} />);
    expect(wrapper.find(InfiniteScroll).length).toBe(1);
  });
  it("should not render infinite scroll component if infinite-scroll-collection-id not passed in ampconfig", () => {
    const modifiedConfig = cloneDeep(config);
    modifiedConfig.ampConfig["related-collection-id"] = null; // !!!! change to infinite-scroll-collection-id later
    const wrapper = shallow(<TextStory story={textStory} config={modifiedConfig} relatedStories={relatedStories} />);
    expect(wrapper.find(InfiniteScroll).length).toBe(0);
  });
  it("should call relatedStoriesRender prop when passed to opts", () => {
    const relatedStoriesRender = jest.fn();
    const modifiedConfig = { ...config, opts: { ...config.opts, relatedStoriesRender } };
    const wrapper = shallow(<TextStory story={textStory} config={modifiedConfig} relatedStories={relatedStories} />);
    expect(relatedStoriesRender.mock.calls.length).toBe(1);
    expect(wrapper.find(RelatedStories).length).toBe(0);
  });
});
