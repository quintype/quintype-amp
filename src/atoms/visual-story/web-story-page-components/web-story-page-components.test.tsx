import React from "react";
import { visualStory, config } from "../../../__fixtures__";
import { WebStoryPageComponents, WebStoryImage } from "./web-story-page-components";
import { shallow } from "enzyme";

describe("WebStoryPageComponents", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<WebStoryPageComponents card={visualStory.cards[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("WebStoryImage", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <WebStoryImage
        slug="foo"
        metadata={{ width: 1200, height: 800, "focus-point": [398, 221] }}
        config={config}
        lorem={"ipsum"}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
