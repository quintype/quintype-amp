import React from "react";
import { visualStory } from "../../../__fixtures__";
import { WebStoryPageComponents } from "./web-story-page-components";
import { mount, shallow } from "enzyme";

const ctaCard = {
  "story-elements": [
    {
      description: "",
      "page-url": "/story/e8e3a6d0-98ff-40eb-b400-5f9466599fb3/element/9de60d4e-ee94-488e-a41a-2150cfcaf9d0",
      type: "soundcloud-audio",
      "family-id": "f4552014-ace6-4d95-9bbc-6f9e84572d68",
      title: "",
      id: "9de60d4e-ee94-488e-a41a-2150cfcaf9d0",
      url: "https://soundcloud.com/ilyanaazman/sets/bestofchillnation",
      "embed-url":
        "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Filyanaazman%2Fsets%2Fbestofchillnation&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true",
      metadata: {},
      subtype: null
    },
    {
      description: "",
      "page-url": "/story/9debf2ea-b0a0-4fb5-a6d9-9e19c6f35bd0/element/39664f53-e649-499b-bf79-8a3e6e9f5d34",
      type: "text",
      "family-id": "fe898bdb-fa19-43e5-99a3-80956e0d4846",
      title: "",
      id: "39664f53-e649-499b-bf79-8a3e6e9f5d34",
      metadata: {
        "cta-title": "Search Google",
        "cta-url": "https://www.google.com",
        "open-in-new-tab": true,
        "no-follow": false
      },
      subtype: "cta",
      text:
        '<a class="cta-anchor" href="https://www.google.com" target="_blank" rel=""><span class="cta-text">Search Google</span></a>'
    }
  ],
  "card-updated-at": 1604397822735,
  "content-version-id": "a7f9afcf-013a-4276-8ad3-ee8cfbb42a74",
  "card-added-at": 1604295895316,
  status: "draft",
  id: "3d56e690-2256-49b3-95f6-c88669b70b4e",
  "content-id": "3d56e690-2256-49b3-95f6-c88669b70b4e",
  version: 11,
  metadata: {
    "social-share": {
      shareable: false,
      title: "Pets are awesome",
      message: null,
      image: {
        key: "amplib/2020-10/6adaf26f-3b7b-45e0-9973-6f99abeecf5d/erin_agius_I7TLmA4j0c8_unsplash.jpg",
        url: null,
        attribution: " <p>unsplash.com/</p>",
        caption: " <p>Masked woman</p>",
        metadata: {
          width: 5792,
          height: 8688,
          "mime-type": "image/jpeg",
          "file-size": 4016993,
          "file-name": "erin-agius-I7TLmA4j0c8-unsplash.jpg"
        }
      }
    },
    attributes: {}
  }
};

describe("WebStoryPageComponents", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<WebStoryPageComponents card={visualStory.cards[0]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should add correct attributes to CTA element", () => {
    const wrapper = mount(<WebStoryPageComponents card={ctaCard} />);
    expect(wrapper.find("amp-story-page-outlink").length).toBe(1);
    expect(
      wrapper
        .find("amp-story-page-outlink")
        .find("a")
        .text()
    ).toBe("Search Google");
    expect(
      wrapper
        .find("amp-story-page-outlink")
        .find("a")
        .prop("href")
    ).toBe("https://www.google.com");
  });
});
