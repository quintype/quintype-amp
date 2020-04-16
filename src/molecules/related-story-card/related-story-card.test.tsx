import React from "react";
import { RelatedStoryCard } from "./related-story-card";
import { shallow } from "enzyme";
import { relatedStories } from "../../__fixtures__";

const dummyRelatedStory = relatedStories[0];

describe("RelatedStoryCard", () => {
  it("should render default", () => {
    const wrapper = shallow(<RelatedStoryCard story={dummyRelatedStory} />);
    expect(wrapper).toMatchSnapshot();
  });
});
