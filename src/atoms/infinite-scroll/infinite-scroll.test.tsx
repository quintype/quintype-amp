import React from "react";
import { InfiniteScroll, InfiniteScrollBase } from "./infinite-scroll";
import { shallow } from "enzyme";
import { config, textStory } from "../../__fixtures__";

const dummyInlineConfigJson = `[{\"image\":\"https://foo.com/puppies.jpg\",\"title\":\"Puppies Page\",\"url\":\"/puppies\"}]`;
describe("InfiniteScroll Component", () => {
  it("should render default", () => {
    const wrapper = shallow(<InfiniteScroll inlineConfig={dummyInlineConfigJson} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should call infiniteScrollRender when passed", () => {
    const infiniteScrollRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { infiniteScrollRender } } };
    const wrapper = shallow(
      <InfiniteScrollBase story={textStory} config={modifiedConfig} inlineConfig={dummyInlineConfigJson} />
    );
    expect(infiniteScrollRender.mock.calls.length).toBe(1);
    expect(wrapper.find("amp-next-page").length).toBe(0);
  });
});
