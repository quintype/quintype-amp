import React from "react";
import { RelatedStoryCard } from "./related-story-card";
import { shallow } from "enzyme";
import { relatedStoriesObj } from "../../__fixtures__";

const sampleRelatedStory = relatedStoriesObj["related-stories"][0];

describe("RelatedStoryCard", () => {
  it("should render default", () => {
    const wrapper = shallow(<RelatedStoryCard story={sampleRelatedStory} fallbackSrc="#" aspectRatio={[16, 9]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
