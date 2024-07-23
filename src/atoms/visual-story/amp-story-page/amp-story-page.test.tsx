import React from "react";
import { visualStory, config, card } from "../../../__fixtures__";
import { AmpStoryPageBase } from "./amp-story-page";
import { shallow } from "enzyme";

describe("amp-story-page", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <AmpStoryPageBase story={visualStory} card={card} config={config} id="123">
        <div>child</div>
      </AmpStoryPageBase>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("should add autoAdvanceAfter prop if passed in visualStories config in form of object inside featureConfig and autoAdvance is enabled", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: {
          autoAdvanceAfter: "5555ms"
        }
      }
    };
    modifiedConfig.additionalConfig = {
      general: {
        amp: {
          enableAutoAdvance: true
        }
      }
    };
    const wrapper = shallow(
      <AmpStoryPageBase story={visualStory} card={card} config={modifiedConfig} id="123">
        <div>child</div>
      </AmpStoryPageBase>
    );
    expect(wrapper.find("amp-story-page").prop("auto-advance-after")).toBe("5555ms");
  });

  it("should add autoAdvanceAfter prop if passed in visualStories config in form of array of object inside featureConfig", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: [
          {
            autoAdvanceAfter: "5555ms"
          }
        ]
      }
    };
    const wrapper = shallow(
      <AmpStoryPageBase story={visualStory} card={card} config={modifiedConfig} id="123">
        <div>child</div>
      </AmpStoryPageBase>
    );
    expect(wrapper.find("amp-story-page").prop("auto-advance-after")).toBe("5555ms");
  });

  it("should not add autoAdvanceAfter prop if it's not passed in featureConfig is empty", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {}
    };
    const wrapper = shallow(
      <AmpStoryPageBase story={visualStory} card={card} config={modifiedConfig} id="123">
        <div>child</div>
      </AmpStoryPageBase>
    );
    expect(wrapper.find("amp-story-page").prop("auto-advance-after")).toBe(undefined);
  });
});
