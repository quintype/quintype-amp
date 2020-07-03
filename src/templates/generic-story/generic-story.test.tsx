import React from "react";
import { shallow } from "enzyme";
import { GenericStory } from "./generic-story";
import { RelatedStories } from "../../molecules";
import { InfiniteScroll } from "../../atoms";
import { textStory, config, relatedStories } from "../../__fixtures__";
import cloneDeep from "lodash.clonedeep";

describe("GenericStory Template", () => {
  it("should render", () => {
    const wrapper = shallow(<GenericStory story={textStory} config={config} relatedStories={relatedStories} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render related stories component", () => {
    const wrapper = shallow(<GenericStory story={textStory} config={config} relatedStories={relatedStories} />);
    expect(wrapper.find(RelatedStories).length).toBe(1);
  });
  it("should render infinite scroll component if exists", () => {
    const modifiedConfig = cloneDeep(config);
    const wrapper = shallow(
      <GenericStory
        story={textStory}
        config={modifiedConfig}
        relatedStories={relatedStories}
        infiniteScrollInlineConfig={`[{\"image\":\"https://foo.com/puppies.jpg\",\"title\":\"Puppies Page\",\"url\":\"/puppies\"}]`}
      />
    );
    expect(wrapper.find(InfiniteScroll).length).toBe(1);
  });
  it("should not render infinite scroll component if infinite-scroll-collection-id not passed in ampconfig", () => {
    const modifiedConfig = cloneDeep(config);
    const wrapper = shallow(<GenericStory story={textStory} config={modifiedConfig} relatedStories={relatedStories} />);
    expect(wrapper.find(InfiniteScroll).length).toBe(0);
  });
  it("should call relatedStoriesRender prop when passed to opts", () => {
    const relatedStoriesRender = jest.fn();
    const modifiedConfig = { ...config, opts: { ...config.opts, relatedStoriesRender } };
    const wrapper = shallow(<GenericStory story={textStory} config={modifiedConfig} relatedStories={relatedStories} />);
    expect(relatedStoriesRender.mock.calls.length).toBe(1);
    expect(wrapper.find(RelatedStories).length).toBe(0);
  });
  it("should call infiniteScrollRender prop when passed to opts", () => {
    const infiniteScrollRender = jest.fn();
    const modifiedConfig = { ...config, opts: { ...config.opts, infiniteScrollRender } };
    const wrapper = shallow(
      <GenericStory
        story={textStory}
        config={modifiedConfig}
        relatedStories={relatedStories}
        infiniteScrollInlineConfig="foo"
      />
    );
    expect(infiniteScrollRender.mock.calls.length).toBe(1);
    expect(wrapper.find(InfiniteScroll).length).toBe(0);
  });
});
