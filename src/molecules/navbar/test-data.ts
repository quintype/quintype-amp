import { config } from "../../__fixtures__";

const dummyConfig = { ...config };

dummyConfig.publisherConfig.domains = [
  {
    name: "astrology",
    slug: "astrology",
    "host-url": "https://astrology.raftaar.in",
    "beta-host-url": null,
    "home-collection-id": 41610,
    "section-ids": [21815],
    "menu-groups": []
  },
  {
    name: "News",
    slug: "news",
    "host-url": "https://news.raftaar.in",
    "beta-host-url": null,
    "home-collection-id": 36478,
    "section-ids": [18739],
    "menu-groups": [960, 1320, 667]
  },
  {
    name: "Foo",
    slug: "foo",
    "host-url": "https://foo.raftaar.in",
    "beta-host-url": null,
    "home-collection-id": 12344,
    "section-ids": [18742],
    "menu-groups": [666, 777, 888]
  }
];

dummyConfig.ampConfig["menu-groups"] = {
  "sidebar-menu-news": {
    id: 796,
    slug: "sidebar-menu-news",
    name: "Sidebar Menu News",
    items: [
      {
        "tag-name": null,
        "entity-properties": null,
        "collection-id": null,
        "entity-slug": null,
        "item-id": null,
        rank: 10821,
        title: "\u0936\u092C\u094D\u0926\u0915\u094B\u0936",
        "item-type": "link",
        "section-slug": null,
        "tag-slug": null,
        id: 10821,
        "parent-id": null,
        url: "https://shabdkosh.raftaar.in",
        "entity-name": null,
        "collection-slug": null,
        "section-name": null,
        data: { color: "#FFFFFF", link: "https://shabdkosh.raftaar.in" }
      },
      {
        "tag-name": null,
        "entity-properties": null,
        "collection-id": null,
        "entity-slug": null,
        "item-id": null,
        rank: 10822,
        title: "\u092E\u094B\u092C\u093E\u0907\u0932 \u0917\u0947\u092E",
        "item-type": "link",
        "section-slug": null,
        "tag-slug": null,
        id: 10822,
        "parent-id": null,
        url: "https://www.raftaar.in/games",
        "entity-name": null,
        "collection-slug": null,
        "section-name": null,
        data: { color: "#FFFFFF", link: "https://www.raftaar.in/games" }
      }
    ]
  },
  default: {
    id: 999,
    slug: "default",
    name: "Default",
    items: [
      {
        "tag-name": null,
        "entity-properties": null,
        "collection-id": null,
        "entity-slug": null,
        "item-id": null,
        rank: 9874,
        title: "\u0916\u093C\u092C\u0930",
        "item-type": "link",
        "section-slug": null,
        "tag-slug": null,
        id: 9874,
        "parent-id": null,
        url: "https://news.raftaar.in",
        "entity-name": null,
        "collection-slug": null,
        "section-name": null,
        data: { color: "#FFFFFF", link: "https://news.raftaar.in" }
      },
      {
        "tag-name": null,
        "entity-properties": null,
        "collection-id": null,
        "entity-slug": null,
        "item-id": null,
        rank: 9875,
        title: "\u0936\u092C\u094D\u0926\u0915\u094B\u0936",
        "item-type": "link",
        "section-slug": null,
        "tag-slug": null,
        id: 9875,
        "parent-id": null,
        url: "https://shabdkosh.raftaar.in",
        "entity-name": null,
        "collection-slug": null,
        "section-name": null,
        data: { color: "#FFFFFF", link: "https://shabdkosh.raftaar.in" }
      },
      {
        "tag-name": null,
        "entity-properties": null,
        "collection-id": null,
        "entity-slug": null,
        "item-id": null,
        rank: 9879,
        title: "\u092E\u094B\u092C\u093E\u0907\u0932 \u0917\u0947\u092E",
        "item-type": "link",
        "section-slug": null,
        "tag-slug": null,
        id: 9879,
        "parent-id": null,
        url: "https://www.raftaar.in/games",
        "entity-name": null,
        "collection-slug": null,
        "section-name": null,
        data: { color: "#FFFFFF", link: "https://www.raftaar.in/games" }
      }
    ]
  },
  "sidebar-menu-astrology": {
    id: 960,
    slug: "sidebar-menu-astrology",
    name: "Sidebar Menu Astrology",
    items: [
      {
        "tag-name": null,
        "entity-properties": null,
        "collection-id": null,
        "entity-slug": null,
        "item-id": null,
        rank: 12420,
        title: "\u0936\u092C\u094D\u0926\u0915\u094B\u0936",
        "item-type": "link",
        "section-slug": null,
        "tag-slug": null,
        id: 12420,
        "parent-id": null,
        url: "https://shabdkosh.raftaar.in",
        "entity-name": null,
        "collection-slug": null,
        "section-name": null,
        data: { color: "#FFFFFF", link: "https://shabdkosh.raftaar.in" }
      }
    ]
  },
  "header-menu-health": {
    id: 667,
    slug: "header-menu-health",
    name: "Header-Menu-Health",
    items: [
      {
        "tag-name": null,
        "entity-properties": null,
        "collection-id": null,
        "entity-slug": null,
        "item-id": null,
        rank: 9598,
        title: "\u092C\u0940\u092E\u093E\u0930\u0940",
        "item-type": "link",
        "section-slug": null,
        "tag-slug": null,
        id: 9598,
        "parent-id": null,
        url: "https://health.raftaar.in/disease",
        "entity-name": null,
        "collection-slug": null,
        "section-name": null,
        data: { color: "#FFFFFF", link: "https://health.raftaar.in/disease" }
      },
      {
        "tag-name": null,
        "entity-properties": null,
        "collection-id": 36414,
        "entity-slug": null,
        "item-id": 18685,
        rank: 9599,
        title: "\u0928\u0941\u0938\u094D\u0916\u0947 \u0914\u0930 \u0926\u0947\u0916\u092D\u093E\u0932",
        "item-type": "section",
        "section-slug": "nuskhe-aur-dekhbhal",
        "tag-slug": null,
        id: 9599,
        "parent-id": null,
        url: "https://health.raftaar.in/nuskhe-aur-dekhbhal",
        "entity-name": null,
        "collection-slug": "nuskhe-aur-dekhbhal",
        "section-name": "\u0928\u0941\u0938\u094D\u0916\u0947 \u0914\u0930 \u0926\u0947\u0916\u092D\u093E\u0932",
        data: { color: "#FFFFFF", link: "https://health.raftaar.in/nuskhe-aur-dekhbhal" }
      }
    ]
  }
};

const defaultMenuItems = dummyConfig.ampConfig["menu-groups"].default.items;
const newsMenuItems = [
  ...dummyConfig.ampConfig["menu-groups"]["sidebar-menu-astrology"].items,
  ...dummyConfig.ampConfig["menu-groups"]["header-menu-health"].items
];

export { dummyConfig, defaultMenuItems, newsMenuItems };
