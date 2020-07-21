import React from "react";
import { RelatedStories, RelatedStoriesBase, Heading } from "./related-stories";
import { RelatedStoryCard } from "../related-story-card";
import { shallow, mount } from "enzyme";
import { Layout } from "../../atoms";
import { config, relatedStories, textStory } from "../../__fixtures__";

describe("RelatedStories", () => {
  it("should render default", () => {
    const wrapper = shallow(
      <Layout story={textStory} config={config}>
        <RelatedStories />
      </Layout>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("should render if related stories passed", () => {
    const wrapper = mount(
      <Layout story={textStory} config={config}>
        <RelatedStories />
      </Layout>
    );
    expect(wrapper.find(RelatedStoryCard).length).toBeGreaterThan(0);
    expect(wrapper.find(Heading).text()).toBe("Also Read");
  });
  it("should not render if related stories not passed", () => {
    const modifiedConfig = { ...config };
    modifiedConfig.opts = {};
    const wrapper = mount(
      <Layout story={textStory} config={modifiedConfig}>
        <RelatedStories />
      </Layout>
    );
    expect(wrapper.find(RelatedStoryCard).length).toBe(0);
  });
  it("should call relatedStoriesRender when passed", () => {
    const relatedStoriesRender = jest.fn();
    const modifiedConfig = {
      ...config,
      opts: { render: { relatedStoriesRender }, featureConfig: { relatedStories: { stories: relatedStories } } }
    };
    const wrapper = shallow(<RelatedStoriesBase story={textStory} config={modifiedConfig} />);
    expect(relatedStoriesRender.mock.calls.length).toBe(1);
    expect(wrapper.find(RelatedStories).length).toBe(0);
  });
});
