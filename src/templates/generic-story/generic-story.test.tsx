import React from "react";
import { shallow } from "enzyme";
import { GenericStory } from "./generic-story";
import { InfiniteScroll } from "../../atoms";
import { textStory, config, relatedStories } from "../../__fixtures__";
import cloneDeep from "lodash.clonedeep";

describe("GenericStory Template", () => {
  it("should render", () => {
    const wrapper = shallow(<GenericStory story={textStory} config={config} relatedStories={relatedStories} />);
    expect(wrapper).toMatchSnapshot();
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
    const wrapper = shallow(<GenericStory story={textStory} config={config} relatedStories={relatedStories} />);
    expect(wrapper.find(InfiniteScroll).length).toBe(0);
    expect(wrapper.find("amp-next-page").length).toBe(0);
  });
  it("should add attribute 'next-page-hide' when infinite scroll is enabled", () => {
    const wrapper = shallow(
      <GenericStory
        story={textStory}
        config={config}
        relatedStories={relatedStories}
        infiniteScrollInlineConfig={`[{\"image\":\"https://foo.com/puppies.jpg\",\"title\":\"Puppies Page\",\"url\":\"/puppies\"}]`}
      />
    );
    expect(
      wrapper
        .find(InfiniteScroll)
        .find("div")
        .prop("next-page-hide")
    ).toBe("true");
  });
});
