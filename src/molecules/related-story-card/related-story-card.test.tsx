import React from "react";
import { RelatedStoryCard } from "./related-story-card";
import { shallow } from "enzyme";
import { relatedStories } from "../../__fixtures__";

const sampleRelatedStory = relatedStories["related-stories"][0];

describe("RelatedStoryCard", () => {
  it("should render default", () => {
    const wrapper = shallow(<RelatedStoryCard story={sampleRelatedStory} />);
    expect(wrapper).toMatchSnapshot();
  });
});
