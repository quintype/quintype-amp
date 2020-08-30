import React from "react";
import { InfiniteScroll, InfiniteScrollBase, StyledSeparator } from "./infinite-scroll";
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
  it("should apply custom separator text passed via feature config", () => {
    const modifiedConfig = {
      ...config,
      opts: {
        featureConfig: {
          infiniteScroll: {
            infiniteScrollInlineConfig: dummyInlineConfigJson,
            storySeparatorText: "foo bar baz"
          }
        }
      }
    };
    const wrapper = shallow(
      <InfiniteScrollBase story={textStory} config={modifiedConfig} inlineConfig={dummyInlineConfigJson} />
    );
    expect(
      wrapper
        .find(StyledSeparator)
        .childAt(0)
        .text()
    ).toBe("foo bar baz");
  });
  it("should apply fallback separator text if storySeparatorText is not passed via feature config", () => {
    const wrapper = shallow(
      <InfiniteScrollBase story={textStory} config={config} inlineConfig={dummyInlineConfigJson} />
    );
    expect(
      wrapper
        .find(StyledSeparator)
        .childAt(0)
        .text()
    ).toBe("SCROLL FOR NEXT");
  });
});
