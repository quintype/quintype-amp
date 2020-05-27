import React from "react";
import { shallow } from "enzyme";
import { TextStory } from "./text-story";
import { RelatedStories } from "../../molecules";

import { textStory, config, relatedStories } from "../../__fixtures__";
describe("TextStory Template", () => {
  it("should render", () => {
    const wrapper = shallow(<TextStory story={textStory} config={config} relatedStories={relatedStories} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render related stories component", () => {
    const wrapper = shallow(<TextStory story={textStory} config={config} relatedStories={relatedStories} />);
    expect(wrapper.find(RelatedStories).length).toBe(1);
  });
  it("should call relatedStoriesRender prop when passed to opts", () => {
    const relatedStoriesRender = jest.fn();
    const modifiedConfig = { ...config, opts: { ...config.opts, relatedStoriesRender } };
    const wrapper = shallow(<TextStory story={textStory} config={modifiedConfig} relatedStories={relatedStories} />);
    expect(relatedStoriesRender.mock.calls.length).toBe(1);
    expect(wrapper.find(RelatedStories).length).toBe(0);
  });
});
