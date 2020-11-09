import React from "react";
import { visualStory, config } from "../../../__fixtures__";
import { AmpStoryPageBase } from "./amp-story-page";
import { shallow } from "enzyme";

describe("amp-story-auto-ads", () => {
  it("should add autoAdvanceAfter prop if passed in featureConfig", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: {
          autoAdvanceAfter: "5555ms"
        }
      }
    };
    const wrapper = shallow(
      <AmpStoryPageBase story={visualStory} config={modifiedConfig} id="123">
        <div>child</div>
      </AmpStoryPageBase>
    );
    expect(wrapper.find("amp-story-page").prop("auto-advance-after")).toBe("5555ms");
  });
});
