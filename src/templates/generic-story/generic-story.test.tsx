import React from "react";
import { shallow } from "enzyme";
import { GenericStory } from "./generic-story";
import { InfiniteScroll } from "../../atoms";
import { textStory, config } from "../../__fixtures__";
import { TopAd, BodyAd, BottomAd } from "../../molecules/ads";
import { StoryPageSlots } from "../../molecules/slots";
import cloneDeep from "lodash.clonedeep";

const { TopSlot, BottomSlot, DefaultStoryCardSlot } = StoryPageSlots;
const dummyCard = {
  "story-elements": [
    {
      description: "",
      "page-url": "foo/bar",
      type: "text",
      "family-id": "123abc",
      title: "",
      id: "def567",
      metadata: {},
      subtype: null,
      text: "<p>lorem ipsum</p>"
    }
  ],
  "card-updated-at": 1581327522163,
  "content-version-id": "efaf78de-c90b-4d15-b040-c84ebb29cabf",
  "card-added-at": 1581327522163,
  status: "draft",
  id: "bf486412-1e8b-45d1-a5fd-51939cfe1ce1",
  "content-id": "bf486412-1e8b-45d1-a5fd-51939cfe1ce1",
  version: 1,
  metadata: {
    "social-share": {
      shareable: false,
      title: "#Sponsored: Empowering India’s Future Lawyers and Leaders",
      message: null,
      image: null
    }
  }
};

describe("GenericStory Template", () => {
  it("should render", () => {
    const wrapper = shallow(<GenericStory story={textStory} config={config} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render infinite scroll component if exists", () => {
    const wrapper = shallow(<GenericStory story={textStory} config={config} />);
    expect(wrapper.find(InfiniteScroll).length).toBe(1);
  });
  it("should not render infinite scroll component if infinite-scroll-collection-id not passed in ampconfig", () => {
    const modifiedConfig = { ...config };
    modifiedConfig.opts = {};
    const wrapper = shallow(<GenericStory story={textStory} config={modifiedConfig} />);
    expect(wrapper.find(InfiniteScroll).length).toBe(0);
    expect(wrapper.find("amp-next-page").length).toBe(0);
  });
  it("should add attribute 'next-page-hide' when infinite scroll is enabled", () => {
    const wrapper = shallow(<GenericStory story={textStory} config={config} />);
    expect(
      wrapper
        .find(InfiniteScroll)
        .find("div")
        .prop("next-page-hide")
    ).toBe("true");
  });
  it("should set 'templateName' prop as 'default' for all DFP ads", () => {
    const wrapper = shallow(<GenericStory story={textStory} config={config} />);
    expect(wrapper.find(TopAd).prop("templateName")).toBe("default");
    expect(wrapper.find(BodyAd).prop("templateName")).toBe("default");
    expect(wrapper.find(BottomAd).prop("templateName")).toBe("default");
  });
  it("should render all generic story page slots", () => {
    const dummyStory = cloneDeep(textStory);
    dummyStory.cards = [];
    for (let i = 0; i < 5; i++) {
      dummyStory.cards.push(dummyCard);
    }
    const wrapper = shallow(<GenericStory story={dummyStory} config={config} />);
    expect(wrapper.find(TopSlot).length).toBe(1);
    expect(wrapper.find(BottomSlot).length).toBe(1);
    expect(wrapper.find(DefaultStoryCardSlot).length).toBe(5);
  });
});
