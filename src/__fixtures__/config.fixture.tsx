import { Config, PublisherConfig, AMPConfig } from "../types/config";
import { TopSlotTest } from "./render-props.fixture";
import React from "react";
import { ConfigOpts } from "../types/config";
import { relatedStories } from "./related-stories";

export const publisherConfig: PublisherConfig = {
  "cdn-name": "https://thumbor-stg.assettype.com/",
  "cdn-image": "gumlet.assettype.com",
  "sketches-host": "https://www.vikatan.com",
  "text-direction": "ltr",
  facebook: { "app-id": "1234" },
  "publisher-name": "vikatan",
  env: "production",
  "publisher-id": 1,
  "publisher-settings": {
    title: "Newslaundry",
    description:
      "We have finally migrated our website to better architecture! While the fancy new website will be up in a few months, we have fixed issues related to payment and login in the meantime. You will need to log in anew. If you have forgotten your password, you can generate one by clicking on the forgot password link (it works!). Send any questions or feedback to contact@newslaundry.com.",
    "publisher-logo": null,
    copyright: "Copyright © 2020 Newslaundry Media Private Limited.  All Rights Reserved "
  },
  sections: [],
  layout: {
    "no-of-visible-cards-in-a-blocked-story": 1
  },
  domains: [],
  language: {
    "iso-code": "en",
    "ietf-code": "en-us",
    name: "english",
    direction: "ltr"
  }
};

export const ampConfig: AMPConfig = {
  menu: {
    enabled: true
  },
  "related-collection-id": 1234,
  "infinite-scroll-collection-id": 5678,
  "menu-groups": {
    default: {
      id: 43,
      slug: "default",
      name: "Default",
      items: [
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": null,
          "entity-slug": null,
          "item-id": null,
          rank: 7337,
          title: "Home",
          "item-type": "link",
          "section-slug": null,
          "tag-slug": null,
          id: 7342,
          "parent-id": null,
          url: "https://barandbench.com",
          "entity-name": null,
          "collection-slug": null,
          "section-name": null,
          data: {
            color: "#FFFFFF",
            link: "https://barandbench.com"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29911,
          "entity-slug": null,
          "item-id": 14017,
          rank: 7342,
          title: "News",
          "item-type": "section",
          "section-slug": "news",
          "tag-slug": null,
          id: 7343,
          "parent-id": null,
          url: "https://www.barandbench.com/news",
          "entity-name": null,
          "collection-slug": "news",
          "section-name": "News",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29926,
          "entity-slug": null,
          "item-id": 14032,
          rank: 7343,
          title: "Dealstreet",
          "item-type": "section",
          "section-slug": "dealstreet",
          "tag-slug": null,
          id: 7363,
          "parent-id": null,
          url: "https://www.barandbench.com/dealstreet",
          "entity-name": null,
          "collection-slug": "dealstreet",
          "section-name": "Dealstreet",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29932,
          "entity-slug": null,
          "item-id": 14038,
          rank: 7344,
          title: "Corporate & In-House",
          "item-type": "section",
          "section-slug": "corporate-in-house",
          "tag-slug": null,
          id: 7344,
          "parent-id": 7337,
          url: "https://www.barandbench.com/interviews/corporate-in-house",
          "entity-name": null,
          "collection-slug": "corporate-in-house-interviews",
          "section-name": "In house & Corporate Interviews",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29927,
          "entity-slug": null,
          "item-id": 14033,
          rank: 7345,
          title: "Litigation",
          "item-type": "section",
          "section-slug": "litigation-interviews",
          "tag-slug": null,
          id: 7345,
          "parent-id": 7337,
          url: "https://www.barandbench.com/interviews/litigation-interviews",
          "entity-name": null,
          "collection-slug": "litigation-interviews-interviews",
          "section-name": "Litigation Interviews",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29922,
          "entity-slug": null,
          "item-id": 14028,
          rank: 7346,
          title: "Law & Policy",
          "item-type": "section",
          "section-slug": "law-policy-interviews",
          "tag-slug": null,
          id: 7346,
          "parent-id": 7337,
          url: "https://www.barandbench.com/interviews/law-policy-interviews",
          "entity-name": null,
          "collection-slug": "law-policy-interviews-interviews",
          "section-name": "Law & Policy interviews",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29923,
          "entity-slug": null,
          "item-id": 14029,
          rank: 7347,
          title: "Law Schools",
          "item-type": "section",
          "section-slug": "law-school-interviews",
          "tag-slug": null,
          id: 7347,
          "parent-id": 7337,
          url: "https://www.barandbench.com/interviews/law-school-interviews",
          "entity-name": null,
          "collection-slug": "law-school-interviews-interviews",
          "section-name": "Law School interviews",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29921,
          "entity-slug": null,
          "item-id": 14027,
          rank: 7348,
          title: "Interviews",
          "item-type": "section",
          "section-slug": "interviews",
          "tag-slug": null,
          id: 7337,
          "parent-id": null,
          url: "https://www.barandbench.com/interviews",
          "entity-name": null,
          "collection-slug": "interviews",
          "section-name": "Interviews",
          data: {
            color: "#000000"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29928,
          "entity-slug": null,
          "item-id": 14034,
          rank: 7349,
          title: "Corporate & In-House",
          "item-type": "section",
          "section-slug": "corporate-law",
          "tag-slug": null,
          id: 7349,
          "parent-id": 7348,
          url: "https://www.barandbench.com/columns/corporate-law",
          "entity-name": null,
          "collection-slug": "corporate-law-columns",
          "section-name": "Corporate & In-house Columns",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29918,
          "entity-slug": null,
          "item-id": 14024,
          rank: 7350,
          title: "Corporate & In-House",
          "item-type": "section",
          "section-slug": "corporate",
          "tag-slug": null,
          id: 7350,
          "parent-id": 7343,
          url: "https://www.barandbench.com/news/corporate",
          "entity-name": null,
          "collection-slug": "corporate-news",
          "section-name": "Corporate & In-House News",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29912,
          "entity-slug": null,
          "item-id": 14018,
          rank: 7351,
          title: "Litigation",
          "item-type": "section",
          "section-slug": "litigation",
          "tag-slug": null,
          id: 7351,
          "parent-id": 7343,
          url: "https://www.barandbench.com/news/litigation",
          "entity-name": null,
          "collection-slug": "litigation-news",
          "section-name": "Litigation News",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29919,
          "entity-slug": null,
          "item-id": 14025,
          rank: 7352,
          title: "Law & Policy",
          "item-type": "section",
          "section-slug": "law-policy",
          "tag-slug": null,
          id: 7352,
          "parent-id": 7343,
          url: "https://www.barandbench.com/news/law-policy",
          "entity-name": null,
          "collection-slug": "law-policy-news",
          "section-name": "Law & Policy News",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29916,
          "entity-slug": null,
          "item-id": 14022,
          rank: 7353,
          title: "Law Schools",
          "item-type": "section",
          "section-slug": "lawschools",
          "tag-slug": null,
          id: 7353,
          "parent-id": 7343,
          url: "https://www.barandbench.com/news/lawschools",
          "entity-name": null,
          "collection-slug": "lawschools-news",
          "section-name": "Law Schools News",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29917,
          "entity-slug": null,
          "item-id": 14023,
          rank: 7354,
          title: "Law & Policy",
          "item-type": "section",
          "section-slug": "policy-columns",
          "tag-slug": null,
          id: 7354,
          "parent-id": 7348,
          url: "https://www.barandbench.com/columns/policy-columns",
          "entity-name": null,
          "collection-slug": "policy-columns-columns",
          "section-name": "Law & Policy Columns",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29929,
          "entity-slug": null,
          "item-id": 14035,
          rank: 7355,
          title: "Law Schools",
          "item-type": "section",
          "section-slug": "columns-law-schools",
          "tag-slug": null,
          id: 7355,
          "parent-id": 7348,
          url: "https://www.barandbench.com/columns/columns-law-schools",
          "entity-name": null,
          "collection-slug": "columns-law-schools-columns",
          "section-name": "Law School Columns",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29915,
          "entity-slug": null,
          "item-id": 14021,
          rank: 7356,
          title: "Litigation",
          "item-type": "section",
          "section-slug": "litigation-columns",
          "tag-slug": null,
          id: 7356,
          "parent-id": 7348,
          url: "https://www.barandbench.com/columns/litigation-columns",
          "entity-name": null,
          "collection-slug": "litigation-columns-columns",
          "section-name": "Litigation Columns",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29937,
          "entity-slug": null,
          "item-id": 14043,
          rank: 7357,
          title: "The Recruiters",
          "item-type": "section",
          "section-slug": "the-recruiters",
          "tag-slug": null,
          id: 7357,
          "parent-id": 7348,
          url: "https://www.barandbench.com/columns/the-recruiters",
          "entity-name": null,
          "collection-slug": "the-recruiters-columns",
          "section-name": "The Recruiters",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29935,
          "entity-slug": null,
          "item-id": 14041,
          rank: 7358,
          title: " Working Title",
          "item-type": "section",
          "section-slug": "workingtitle",
          "tag-slug": null,
          id: 7358,
          "parent-id": 7348,
          url: "https://www.barandbench.com/columns/workingtitle",
          "entity-name": null,
          "collection-slug": "workingtitle-columns",
          "section-name": "Working Title",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29914,
          "entity-slug": null,
          "item-id": 14020,
          rank: 7359,
          title: "Columns",
          "item-type": "section",
          "section-slug": "columns",
          "tag-slug": null,
          id: 7348,
          "parent-id": null,
          url: "https://www.barandbench.com/columns",
          "entity-name": null,
          "collection-slug": "columns",
          "section-name": "Columns",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29936,
          "entity-slug": null,
          "item-id": 14042,
          rank: 7360,
          title: "Moot Courts",
          "item-type": "section",
          "section-slug": "moot-courts",
          "tag-slug": null,
          id: 7360,
          "parent-id": 7359,
          url: "https://www.barandbench.com/apprentice-lawyer/moot-courts",
          "entity-name": null,
          "collection-slug": "moot-courts-apprentice-lawyer",
          "section-name": "Moot Courts",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29925,
          "entity-slug": null,
          "item-id": 14031,
          rank: 7361,
          title: "Conferences & Paper presentations",
          "item-type": "section",
          "section-slug": "call-for-papers",
          "tag-slug": null,
          id: 7361,
          "parent-id": 7359,
          url: "https://www.barandbench.com/apprentice-lawyer/call-for-papers",
          "entity-name": null,
          "collection-slug": "call-for-papers",
          "section-name": "Conferences & Paper presentations",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29930,
          "entity-slug": null,
          "item-id": 14036,
          rank: 7362,
          title: "Recruitment Tracker",
          "item-type": "section",
          "section-slug": "recruitment-tracker",
          "tag-slug": null,
          id: 7362,
          "parent-id": 7359,
          url: "https://www.barandbench.com/apprentice-lawyer/recruitment-tracker",
          "entity-name": null,
          "collection-slug": "recruitment-tracker-apprentice-lawyer",
          "section-name": "Recruitment Tracker",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29924,
          "entity-slug": null,
          "item-id": 14030,
          rank: 7363,
          title: "Apprentice Lawyer",
          "item-type": "section",
          "section-slug": "apprentice-lawyer",
          "tag-slug": null,
          id: 7359,
          "parent-id": null,
          url: "https://www.barandbench.com/apprentice-lawyer",
          "entity-name": null,
          "collection-slug": "apprentice-lawyer",
          "section-name": "Apprentice Lawyer",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 29931,
          "entity-slug": null,
          "item-id": 14037,
          rank: 7364,
          title: "Viewpoint",
          "item-type": "section",
          "section-slug": "view-point",
          "tag-slug": null,
          id: 7364,
          "parent-id": null,
          url: "https://www.barandbench.com/view-point",
          "entity-name": null,
          "collection-slug": "view-point",
          "section-name": "The Viewpoint",
          data: {
            color: "#FFFFFF"
          }
        },
        {
          "tag-name": null,
          "entity-properties": null,
          "collection-id": 30047,
          "entity-slug": null,
          "item-id": 14122,
          rank: 7477,
          title: "Legal Jobs",
          "item-type": "section",
          "section-slug": "legal-jobs",
          "tag-slug": null,
          id: 7477,
          "parent-id": null,
          url: "https://www.barandbench.com/legal-jobs",
          "entity-name": null,
          "collection-slug": "legal-jobs",
          "section-name": "Legal Jobs",
          data: {
            color: "#FFFFFF"
          }
        }
      ]
    }
  },
  fonts: {
    primary: {
      url: "Open+Sans:300,400,600,700",
      family: '"Open Sans", sans-serif'
    },
    secondary: {
      url: "PT+Serif:400,400italic,700,700italic",
      family: "'PT Serif', sans-serif"
    }
  },
  colors: {
    primary: "#294f32",
    secondary: "#763194",
    "footer-background": "#FDBD10",
    "footer-text-color": "#FFF",
    "header-background": "#dd0b4d",
    "section-text-color": "#f4e842"
  },
  "logo-url": "https://images.assettype.com/thecue/2020-01/fdf230c2-d529-4da6-86ad-535e54adfad8/TheCue_Logo_dark.png",
  doubleclick: {
    "top-ad": {
      width: 300,
      height: 250,
      "unit-path": "/35096353/amptesting/formats/sticky"
    },
    "body-ad": {
      width: 300,
      height: 250,
      "unit-path": "/60988533/AMP_Body"
    },
    "bottom-ad": {
      width: 300,
      height: 250,
      "unit-path": "/35096353/amptesting/formats/sticky"
    }
  },
  webengage: {
    "license-code": "~134105365",
    "india-data-center": false
  },
  "comscore-tracking-vars": {
    c1: 123,
    c2: 456
  },
  chartbeat: {
    uid: "61123",
    domain: "vikatan.com",
    useCanonical: true,
    sections: "News",
    authors: "Ravi Kanth"
  },
  "gtm-id": "GTM-XXXXXX",
  "google-client-id-api": false,
  "invalid-elements-strategy": "redirect-to-web-version",
  "google-analytics-tracking-id": "UA-ABCDEFG"
};

const infiniteScrollInlineConfig = `[{\"image\":\"https://foo.com/puppies.jpg\",\"title\":\"Puppies Page\",\"url\":\"/puppies\"}]`;

export const configOpts: ConfigOpts = {
  slots: {
    story: {
      // tslint:disable-next-line:no-shadowed-variable
      "top-slot": ({ story, config }) => <TopSlotTest story={story} config={config} />
    }
  },
  featureConfig: {
    infiniteScroll: {
      infiniteScrollInlineConfig
    },
    relatedStories: {
      stories: relatedStories
    },
    subscriptions: {
      services: {
        authorizationUrl: ({ story }) =>
          `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
        pingbackUrl: ({ story }) =>
          `http://localhost:3000/api/access/v1/stories/${story["story-content-id"]}/amp-access?key=Fxugwc1mVDyJZ2dHB58bShso&accesstype_integration_id=10&readerId=READER_ID`,
        actions: { login: "https://www.google.com", subscribe: "https://www.facebook.com" }
      },
      score: { supportsViewer: 10, isReadyToPay: 9 },
      fallbackEntitlement: {
        source: "fallback",
        granted: false,
        grantReason: "SUBSCRIBER",
        data: { numberRemaining: 2, isLast: false, isLoggedIn: false }
      }
    }
  }
};

export const config: Config = {
  publisherConfig,
  ampConfig,
  opts: configOpts
};
