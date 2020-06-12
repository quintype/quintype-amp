import React from "react";
import { RelatedStoryCard } from "./related-story-card";
import { shallow, mount } from "enzyme";
import { relatedStories } from "../../__fixtures__";
import { Theme } from "../../context/theme";

const sampleRelatedStory = relatedStories[0];

describe("RelatedStoryCard", () => {
  it("should render default", () => {
    const wrapper = shallow(<RelatedStoryCard story={sampleRelatedStory} fallbackSrc="#" aspectRatio={[16, 9]} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render default", () => {
    const wrapper = mount(
      <Theme>
        <RelatedStoryCard
          aspectRatio={[16, 9]}
          fallbackSrc=""
          story={sampleRelatedStory}
          wrapperInlineStyles={{ backgroundColor: "#ccf" }}
          anchorInlineStyles={{ fontStyle: "italic" }}
          headlineInlineStyles={{ fontSize: "bold" }}
        />
      </Theme>
    );
    expect(
      wrapper
        .find("div")
        .at(0)
        .prop("style")
    ).toStrictEqual({ backgroundColor: "#ccf" });
    expect(wrapper.find("a").prop("style")).toStrictEqual({ fontStyle: "italic" });
    expect(wrapper.find("h1").prop("style")).toStrictEqual({ fontSize: "bold" });
  });
});
