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
    const modifiedConfig = cloneDeep(config);
    const wrapper = shallow(<GenericStory story={textStory} config={modifiedConfig} relatedStories={relatedStories} />);
    expect(wrapper.find(InfiniteScroll).length).toBe(0);
  });
});
