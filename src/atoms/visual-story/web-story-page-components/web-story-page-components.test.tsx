import React from "react";
import { visualStory } from "../../../__fixtures__";
import { WebStoryPageComponents } from "./web-story-page-components";
import { shallow } from "enzyme";

describe("WebStoryPageComponents", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<WebStoryPageComponents card={visualStory.cards[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
