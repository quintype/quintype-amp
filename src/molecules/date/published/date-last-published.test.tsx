import React from "react";
import { DateLastPublishedBase } from "./date-last-published";
import { shallow } from "enzyme";
import { DateTime } from "../../../atoms";
import { config } from "../../../__fixtures__";

describe("DateLastPublished", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<DateLastPublishedBase story={getDummyStory()} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should pass date in default format to <DateTime />", () => {
    const wrapper = shallow(<DateLastPublishedBase story={getDummyStory()} />);
    expect(wrapper.find(DateTime).prop("formattedDate")).toBe("27th May, 2020 at 6:01 AM");
  });
  it("should pass date in custom format to <DateTime />", () => {
    const wrapper = shallow(<DateLastPublishedBase story={getDummyStory()} format="dd MM yyyy" />);
    expect(wrapper.find(DateTime).prop("formattedDate")).toBe("27 05 2020");
  });
  it("should pass prepend to <DateTime />", () => {
    const wrapper = shallow(<DateLastPublishedBase story={getDummyStory()} prepend="lorem ipsum" />);
    expect(wrapper.find(DateTime).prop("prepend")).toBe("lorem ipsum");
  });
  it("should pass localized formattedDate to <DateTime />", () => {
    const wrapper = shallow(<DateLastPublishedBase story={getDummyStory()} config={config} />);
    expect(wrapper.find(DateTime).prop("formattedDate")).toBe("27. Mai 2020, 6:01 AM");
  });
});

const getDummyStory = () => {
  return {
    "updated-at": 1581503848382,
    seo: {
      "meta-keywords": ["LSAC", "Law School", "legal Education", "Lawyers", "Advocates", "India", "Law"],
      "meta-title": "Empowering India’s Future Lawyers and Leaders",
      "meta-description":
        "#Sponsored: New milestones and initiatives mark LSAC’s ongoing efforts to increase access to legal education in India. - Bar & Bench ",
      "claim-reviews": {
        story: null
      }
    },
    "assignee-id": 708282,
    "author-name": "Ravi Kanth",
    tags: [
      {
        id: 2038546,
        name: "LSAC",
        "meta-description": null,
        "meta-title": null,
        slug: "lsac",
        "tag-type": "Tag"
      }
    ],
    headline: "#Sponsored: Empowering India’s Future Lawyers and Leaders",
    "storyline-id": null,
    votes: {},
    "story-content-id": "7f3d5bdb-ec52-4047-ac0d-df4036ec974b",
    slug: "news/empowering-indias-future-lawyers-and-leaders",
    "linked-stories": {},
    "last-published-at": 1590539519368,
    subheadline:
      "New milestones and initiatives mark LSAC’s ongoing efforts to increase access to legal education in India",
    alternative: {},
    sections: [
      {
        "domain-slug": null,
        slug: "news",
        name: "News",
        "section-url": "https://www.barandbench.com/news",
        id: 14017,
        "parent-id": null,
        "display-name": "News",
        collection: {
          slug: "news",
          name: "News",
          id: 29911
        },
        data: null
      }
    ],
    "read-time": 5,
    "access-level-value": null,
    "content-created-at": 1581326633010,
    "owner-name": "Ravi Kanth",
    "custom-slug": "Empowering India’s Future Lawyers and Leaders",
    "push-notification": null,
    "publisher-id": 829,
    "hero-image-metadata": {
      width: 2550,
      height: 1162,
      "mime-type": "image/jpeg",
      "file-size": 185634,
      "file-name": "Discover_Law_Logo_1.jpg",
      "focus-point": [1275, 581]
    },
    comments: null,
    "word-count": 1143,
    entities: {},
    "published-at": 1581503851412,
    "is-live-blog": false,
    "breaking-news-linked-story-id": null,
    "storyline-title": null,
    summary: null,
    "push-notification-title": null,
    "external-id": null,
    "canonical-url": null,
    "is-amp-supported": true,
    autotags: [],
    "linked-entities": [],
    status: "published",
    "hero-image-attribution": "Create",
    "bullet-type": "123",
    id: "7f3d5bdb-ec52-4047-ac0d-df4036ec974b",
    "hero-image-s3-key": "barandbench/2020-02/43fb44c4-2028-4b90-95ad-dc54aad47a28/Discover_Law_Logo_1.jpg",
    contributors: null,
    "associated-series-collection-ids": [],
    cards: [],
    url: "https://www.barandbench.com/news/empowering-indias-future-lawyers-and-leaders",
    "story-version-id": "1110cdc2-a1d6-4a6c-9707-f4b9b516d49e",
    "content-type": "story",
    "content-updated-at": 1581503851699,
    "author-id": 708282,
    "owner-id": 708282,
    "linked-story-ids": ["a7a06a3f-8d9a-450c-8eaa-387b7c8c6323"],
    access: "subscription",
    "asana-project-id": null,
    "first-published-at": 1581503851412,
    "hero-image-caption": null,
    version: 12,
    "story-template": "text",
    "sequence-no": null,
    "created-at": 1581327522143,
    authors: [
      {
        id: 708282,
        name: "Ravi Kanth",
        slug: "ravi-kanth",
        "avatar-url":
          "https://images.assettype.com/barandbench/2020-01/82d5c350-9791-4cdb-88d5-f52b2d98a4ab/Bar_and_Bench_Icon_Purple.png",
        "avatar-s3-key": "barandbench/2020-01/82d5c350-9791-4cdb-88d5-f52b2d98a4ab/Bar_and_Bench_Icon_Purple.png",
        "twitter-handle": null,
        bio: null,
        "contributor-role": null
      }
    ],
    metadata: {
      "sponsored-by": "Empowering India’s Future Lawyers and Leaders",
      "card-share": {
        shareable: false
      }
    },
    "publish-at": null,
    "assignee-name": "Ravi Kanth"
  };
};
