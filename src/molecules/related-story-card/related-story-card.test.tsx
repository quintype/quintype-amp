import React from "react";
import { RelatedStoryCard } from "./related-story-card";
import { shallow, mount } from "enzyme";
import { relatedStories, textStory, config } from "../../__fixtures__";
import { base64FallbackImage } from "../../helpers/image-helpers";
import { Layout } from "../../atoms";

const sampleRelatedStory = relatedStories[0];
const relatedStoryWithoutHeroImage = relatedStories[0];
relatedStoryWithoutHeroImage["hero-image-s3-key"] = null;
relatedStoryWithoutHeroImage["hero-image-metadata"] = null;

describe("RelatedStoryCard", () => {
  it("should render default", () => {
    const wrapper = shallow(<RelatedStoryCard story={sampleRelatedStory} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render RelatedStoryCard with fallback image if heroImage is absent", () => {
    const wrapper = mount(
      <Layout story={textStory} config={config}>
        <RelatedStoryCard story={relatedStoryWithoutHeroImage} />
      </Layout>
    );
    expect(wrapper.find("amp-img").prop("src")).toBe(base64FallbackImage);
  });
});
