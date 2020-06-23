import React from "react";
import { RelatedStoryCard } from "./related-story-card";
import { shallow } from "enzyme";
import { relatedStories } from "../../__fixtures__";

const sampleRelatedStory = relatedStories[0];

describe("RelatedStoryCard", () => {
  it("should render default", () => {
    const wrapper = shallow(<RelatedStoryCard story={sampleRelatedStory} fallbackSrc="#" aspectRatio={[16, 9]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
