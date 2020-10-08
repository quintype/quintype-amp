import { config } from "../../__fixtures__";
import cloneDeep from "lodash.clonedeep";

const domains = [
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
    "menu-groups": [795, 797, 796]
  }
];

const dummyConfig1 = generateDummyConfig([
  "sidebar-menu-news",
  "default",
  "amp-sidebar-menu-news",
  "header-menu-health"
]);
dummyConfig1.publisherConfig.domains = [];
dummyConfig1.opts = { domainSlug: undefined };
// ----------------------------------------------------------------------

const dummyConfig2 = generateDummyConfig([
  "sidebar-menu-news",
  "default",
  "amp-sidebar-menu-news",
  "header-menu-health"
]);
dummyConfig2.publisherConfig.domains = domains;
dummyConfig2.opts = { domainSlug: null };
// ----------------------------------------------------------------------

const dummyConfig3 = generateDummyConfig([
  "sidebar-menu-news",
  "default",
  "amp-sidebar-menu-news",
  "header-menu-health"
]);
dummyConfig3.publisherConfig.domains = domains;
dummyConfig3.opts = { domainSlug: "astrology" };
// ----------------------------------------------------------------------

const dummyConfig4 = generateDummyConfig([
  "sidebar-menu-news",
  "default",
  "amp-sidebar-menu-news",
  "header-menu-health"
]);
dummyConfig4.publisherConfig.domains = domains;
dummyConfig4.opts = {
  domainSlug: "news",
  featureConfig: {
    sidebarMenu: {
      menuGroupSlug: "header-menu-health"
    }
  }
};
// ----------------------------------------------------------------------

const dummyConfig5 = generateDummyConfig([
  "sidebar-menu-news",
  "default",
  "amp-sidebar-menu-news",
  "header-menu-health"
]);
dummyConfig5.publisherConfig.domains = domains;
dummyConfig5.opts = { domainSlug: "news" };
// ----------------------------------------------------------------------

const dummyConfig6 = generateDummyConfig(["sidebar-menu-news", "default", "header-menu-health"]);
dummyConfig6.publisherConfig.domains = domains;
dummyConfig6.opts = { domainSlug: "news" };
// ----------------------------------------------------------------------

const dummyConfig7 = generateDummyConfig(["sidebar-menu-news", "default", "header-menu-health", "foo"]);
dummyConfig7.publisherConfig.domains = domains;
dummyConfig7.opts = {
  domainSlug: "news",
  featureConfig: {
    sidebarMenu: {
      menuGroupSlug: "foo"
    }
  }
};
// ----------------------------------------------------------------------

const dummyConfig8 = generateDummyConfig(["default"]);
dummyConfig8.ampConfig["menu-groups"]["amp-sidebar-menu-news"] = {
  id: 796,
  slug: "sidebar-menu-news",
  name: "Sidebar Menu News",
  items: []
};

dummyConfig8.publisherConfig.domains = domains;
dummyConfig8.opts = {
  domainSlug: "news"
};
// ----------------------------------------------------------------------

const dummyConfig9 = generateDummyConfig(["default"]);
dummyConfig9.ampConfig["menu-groups"]["sidebar-menu-news"] = {
  id: 796,
  slug: "sidebar-menu-news",
  name: "Sidebar Menu News",
  items: []
};

dummyConfig9.publisherConfig.domains = domains;
dummyConfig9.opts = {
  domainSlug: "news"
};
// ----------------------------------------------------------------------

function generateDummyConfig(slugsArr) {
  const dummyConfig = cloneDeep(config);
  const obj = {
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
    "amp-sidebar-menu-news": {
      id: 960,
      slug: "amp-sidebar-menu-news",
      name: "AMP Sidebar Menu News",
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
    },
    foo: {
      id: 666,
      slug: "foo",
      name: "Foo",
      items: []
    }
  };
  const obj2 = {};
  slugsArr.forEach((slug) => (obj2[slug] = obj[slug]));
  dummyConfig.ampConfig["menu-groups"] = obj2;
  return dummyConfig;
}

const defaultMenuItems = [
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
];
const ampSidebarMenuNewsItems = [
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
];
const sidebarMenuNewsItems = [
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
];
const healthMenuItems = [
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
];

export {
  defaultMenuItems,
  dummyConfig1,
  dummyConfig2,
  dummyConfig3,
  dummyConfig4,
  dummyConfig5,
  dummyConfig6,
  dummyConfig7,
  dummyConfig8,
  dummyConfig9,
  healthMenuItems,
  ampSidebarMenuNewsItems,
  sidebarMenuNewsItems
};
