import React from "react";
import { canTakeCard } from "./visual-story";
import { visualStory, config } from "../../__fixtures__";
import { shallow } from "enzyme";
import { VisualStory } from "./visual-story";

describe("canTakeCard helper function", () => {
  it("should filter out cards not containing valid story elements", () => {
    expect(visualStory.cards.map((card) => canTakeCard(card))).toStrictEqual([true, true, false, true, true, false]);
  });
});

describe("visual story template", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<VisualStory story={visualStory} config={config} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should use /amp/api/v1/bookend.json as default bookend endpoint", () => {
    const wrapper = shallow(<VisualStory story={visualStory} config={config} />);
    expect(wrapper.find("amp-story-bookend").prop("src")).toBe(
      `/amp/api/v1/bookend.json?storyId=${visualStory.id}&sectionId=${visualStory.sections[0].id}`
    );
  });
  it("should take bookend URL if passed from featureConfig", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: {
          bookendUrl: "/foo/bar.json"
        }
      }
    };
    const wrapper = shallow(<VisualStory story={visualStory} config={modifiedConfig} />);
    expect(wrapper.find("amp-story-bookend").prop("src")).toBe(
      `/foo/bar.json?storyId=${visualStory.id}&sectionId=${visualStory.sections[0].id}`
    );
  });
});
