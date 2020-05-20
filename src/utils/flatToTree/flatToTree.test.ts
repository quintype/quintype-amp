/**
 * @jest-environment node
 */

import { FlatToTree } from "./index";

test("FlatToTree", () => {
  const tree = new FlatToTree(getMockData()).getTree();
  console.log(JSON.stringify(tree));
  const expectedOutcome = getExpectedData();
  expect(tree).toMatchObject(expectedOutcome);
});

const getExpectedData = () => [
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": null,
    "entity-slug": null,
    "item-id": null,
    rank: 8959,
    title: "Videos",
    "item-type": "placeholder",
    "section-slug": null,
    "tag-slug": null,
    id: 8963,
    "parent-id": null,
    url: null,
    "entity-name": null,
    "collection-slug": null,
    "section-name": null,
    data: {
      color: "#FFFFFF"
    },
    "child-items": [
      {
        "tag-name": null,
        "entity-properties": null,
        "collection-id": 2262,
        "entity-slug": null,
        "item-id": 5454,
        rank: 8964,
        title: "Cars",
        "item-type": "section",
        "section-slug": "criticles",
        "tag-slug": null,
        id: 8964,
        "parent-id": 8963,
        url: "https://newslaundry-web.qtstage.io/criticles",
        "entity-name": null,
        "collection-slug": "criticles",
        "section-name": "criticles",
        data: {
          color: "#FFFFFF"
        },
        "child-items": [
          {
            "tag-name": null,
            "entity-properties": null,
            "collection-id": null,
            "entity-slug": null,
            "item-id": null,
            rank: 9180,
            title: "Dodge challenger hellcat",
            "item-type": "placeholder",
            "section-slug": null,
            "tag-slug": null,
            id: 9180,
            "parent-id": 8964,
            url: null,
            "entity-name": null,
            "collection-slug": null,
            "section-name": null,
            data: {
              color: "#bd6c6c"
            }
          },
          {
            "tag-name": null,
            "entity-properties": null,
            "collection-id": null,
            "entity-slug": null,
            "item-id": null,
            rank: 9181,
            title: "Ariel Atom ",
            "item-type": "placeholder",
            "section-slug": null,
            "tag-slug": null,
            id: 9181,
            "parent-id": 8964,
            url: null,
            "entity-name": null,
            "collection-slug": null,
            "section-name": null,
            data: {
              color: "#6dedf9"
            }
          }
        ]
      },
      {
        "tag-name": "instagram",
        "entity-properties": null,
        "collection-id": null,
        "entity-slug": null,
        "item-id": 1092744,
        rank: 8965,
        title: "Awesome Science",
        "item-type": "tag",
        "section-slug": null,
        "tag-slug": "instagram",
        id: 8965,
        "parent-id": 8963,
        url: "https://newslaundry-web.qtstage.io/topic/instagram",
        "entity-name": null,
        "collection-slug": null,
        "section-name": null,
        data: {
          color: "#FFFFFF"
        },
        "child-items": [
          {
            "tag-name": null,
            "entity-properties": null,
            "collection-id": null,
            "entity-slug": null,
            "item-id": null,
            rank: 8966,
            title: "Fanta",
            "item-type": "link",
            "section-slug": null,
            "tag-slug": null,
            id: 8966,
            "parent-id": 8965,
            url: "https://www.perfume.com/",
            "entity-name": null,
            "collection-slug": null,
            "section-name": null,
            data: {
              color: "#FFFFFF",
              link: "https://www.perfume.com/"
            },
            "child-items": [
              {
                "tag-name": null,
                "entity-properties": null,
                "collection-id": null,
                "entity-slug": null,
                "item-id": null,
                rank: 9178,
                title: "Jeera soda",
                "item-type": "link",
                "section-slug": null,
                "tag-slug": null,
                id: 9179,
                "parent-id": 8966,
                url: "https://www.google.com",
                "entity-name": null,
                "collection-slug": null,
                "section-name": null,
                data: {
                  color: "#FFFFFF",
                  link: "https://www.google.com"
                }
              },
              {
                "tag-name": null,
                "entity-properties": null,
                "collection-id": 2270,
                "entity-slug": null,
                "item-id": 5462,
                rank: 9179,
                title: "Coca-cola",
                "item-type": "section",
                "section-slug": "can-you-take-it",
                "tag-slug": null,
                id: 9178,
                "parent-id": 8966,
                url: "https://newslaundry-web.qtstage.io/videos/can-you-take-it",
                "entity-name": null,
                "collection-slug": "can-you-take-it",
                "section-name": "can-you-take-it",
                data: {
                  color: "#FFFFFF"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": 2263,
    "entity-slug": null,
    "item-id": 5455,
    rank: 8963,
    title: "Expensive Foods",
    "item-type": "section",
    "section-slug": "campus-politik",
    "tag-slug": null,
    id: 8959,
    "parent-id": null,
    url: "https://newslaundry-web.qtstage.io/campus-politik",
    "entity-name": null,
    "collection-slug": "campus-politik",
    "section-name": "campus-politik",
    data: {
      color: "#FFFFFF"
    },
    "child-items": [
      {
        "tag-name": null,
        "entity-properties": null,
        "collection-id": 2270,
        "entity-slug": null,
        "item-id": 5462,
        rank: 9182,
        title: "Caviar",
        "item-type": "section",
        "section-slug": "can-you-take-it",
        "tag-slug": null,
        id: 9182,
        "parent-id": 8959,
        url: "https://newslaundry-web.qtstage.io/videos/can-you-take-it",
        "entity-name": null,
        "collection-slug": "can-you-take-it",
        "section-name": "can-you-take-it",
        data: {
          color: "#692c5b"
        }
      }
    ]
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": 93426,
    "entity-slug": null,
    "item-id": 42446,
    rank: 9015,
    title: "Companies",
    "item-type": "section",
    "section-slug": "company",
    "tag-slug": null,
    id: 9015,
    "parent-id": null,
    url: "https://newslaundry-web.qtstage.io/company",
    "entity-name": null,
    "collection-slug": "company",
    "section-name": "Company",
    data: {
      color: "#FFFFFF"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": 96306,
    "entity-slug": null,
    "item-id": 43290,
    rank: 9183,
    title: "Podcasts",
    "item-type": "section",
    "section-slug": "podcast-new",
    "tag-slug": null,
    id: 9183,
    "parent-id": null,
    url: "https://newslaundry-web.qtstage.io/podcast-new",
    "entity-name": null,
    "collection-slug": "podcast-new",
    "section-name": "podcast new",
    data: {
      color: "#d8a86b"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": 2265,
    "entity-slug": null,
    "item-id": 5457,
    rank: 9184,
    title: "NLSena",
    "item-type": "section",
    "section-slug": "nl-sena",
    "tag-slug": null,
    id: 9184,
    "parent-id": null,
    url: "https://newslaundry-web.qtstage.io/nl-sena",
    "entity-name": null,
    "collection-slug": "sena",
    "section-name": "nl-sena",
    data: {
      color: "#FFFFFF"
    }
  }
];

const getMockData = () => [
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": null,
    "entity-slug": null,
    "item-id": null,
    rank: 8959,
    title: "Videos",
    "item-type": "placeholder",
    "section-slug": null,
    "tag-slug": null,
    id: 8963,
    "parent-id": null,
    url: null,
    "entity-name": null,
    "collection-slug": null,
    "section-name": null,
    data: {
      color: "#FFFFFF"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": 2263,
    "entity-slug": null,
    "item-id": 5455,
    rank: 8963,
    title: "Expensive Foods",
    "item-type": "section",
    "section-slug": "campus-politik",
    "tag-slug": null,
    id: 8959,
    "parent-id": null,
    url: "https://newslaundry-web.qtstage.io/campus-politik",
    "entity-name": null,
    "collection-slug": "campus-politik",
    "section-name": "campus-politik",
    data: {
      color: "#FFFFFF"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": 2262,
    "entity-slug": null,
    "item-id": 5454,
    rank: 8964,
    title: "Cars",
    "item-type": "section",
    "section-slug": "criticles",
    "tag-slug": null,
    id: 8964,
    "parent-id": 8963,
    url: "https://newslaundry-web.qtstage.io/criticles",
    "entity-name": null,
    "collection-slug": "criticles",
    "section-name": "criticles",
    data: {
      color: "#FFFFFF"
    }
  },
  {
    "tag-name": "instagram",
    "entity-properties": null,
    "collection-id": null,
    "entity-slug": null,
    "item-id": 1092744,
    rank: 8965,
    title: "Awesome Science",
    "item-type": "tag",
    "section-slug": null,
    "tag-slug": "instagram",
    id: 8965,
    "parent-id": 8963,
    url: "https://newslaundry-web.qtstage.io/topic/instagram",
    "entity-name": null,
    "collection-slug": null,
    "section-name": null,
    data: {
      color: "#FFFFFF"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": null,
    "entity-slug": null,
    "item-id": null,
    rank: 8966,
    title: "Fanta",
    "item-type": "link",
    "section-slug": null,
    "tag-slug": null,
    id: 8966,
    "parent-id": 8965,
    url: "https://www.perfume.com/",
    "entity-name": null,
    "collection-slug": null,
    "section-name": null,
    data: {
      color: "#FFFFFF",
      link: "https://www.perfume.com/"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": 93426,
    "entity-slug": null,
    "item-id": 42446,
    rank: 9015,
    title: "Companies",
    "item-type": "section",
    "section-slug": "company",
    "tag-slug": null,
    id: 9015,
    "parent-id": null,
    url: "https://newslaundry-web.qtstage.io/company",
    "entity-name": null,
    "collection-slug": "company",
    "section-name": "Company",
    data: {
      color: "#FFFFFF"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": null,
    "entity-slug": null,
    "item-id": null,
    rank: 9178,
    title: "Jeera soda",
    "item-type": "link",
    "section-slug": null,
    "tag-slug": null,
    id: 9179,
    "parent-id": 8966,
    url: "https://www.google.com",
    "entity-name": null,
    "collection-slug": null,
    "section-name": null,
    data: {
      color: "#FFFFFF",
      link: "https://www.google.com"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": 2270,
    "entity-slug": null,
    "item-id": 5462,
    rank: 9179,
    title: "Coca-cola",
    "item-type": "section",
    "section-slug": "can-you-take-it",
    "tag-slug": null,
    id: 9178,
    "parent-id": 8966,
    url: "https://newslaundry-web.qtstage.io/videos/can-you-take-it",
    "entity-name": null,
    "collection-slug": "can-you-take-it",
    "section-name": "can-you-take-it",
    data: {
      color: "#FFFFFF"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": null,
    "entity-slug": null,
    "item-id": null,
    rank: 9180,
    title: "Dodge challenger hellcat",
    "item-type": "placeholder",
    "section-slug": null,
    "tag-slug": null,
    id: 9180,
    "parent-id": 8964,
    url: null,
    "entity-name": null,
    "collection-slug": null,
    "section-name": null,
    data: {
      color: "#bd6c6c"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": null,
    "entity-slug": null,
    "item-id": null,
    rank: 9181,
    title: "Ariel Atom ",
    "item-type": "placeholder",
    "section-slug": null,
    "tag-slug": null,
    id: 9181,
    "parent-id": 8964,
    url: null,
    "entity-name": null,
    "collection-slug": null,
    "section-name": null,
    data: {
      color: "#6dedf9"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": 2270,
    "entity-slug": null,
    "item-id": 5462,
    rank: 9182,
    title: "Caviar",
    "item-type": "section",
    "section-slug": "can-you-take-it",
    "tag-slug": null,
    id: 9182,
    "parent-id": 8959,
    url: "https://newslaundry-web.qtstage.io/videos/can-you-take-it",
    "entity-name": null,
    "collection-slug": "can-you-take-it",
    "section-name": "can-you-take-it",
    data: {
      color: "#692c5b"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": 96306,
    "entity-slug": null,
    "item-id": 43290,
    rank: 9183,
    title: "Podcasts",
    "item-type": "section",
    "section-slug": "podcast-new",
    "tag-slug": null,
    id: 9183,
    "parent-id": null,
    url: "https://newslaundry-web.qtstage.io/podcast-new",
    "entity-name": null,
    "collection-slug": "podcast-new",
    "section-name": "podcast new",
    data: {
      color: "#d8a86b"
    }
  },
  {
    "tag-name": null,
    "entity-properties": null,
    "collection-id": 2265,
    "entity-slug": null,
    "item-id": 5457,
    rank: 9184,
    title: "NLSena",
    "item-type": "section",
    "section-slug": "nl-sena",
    "tag-slug": null,
    id: 9184,
    "parent-id": null,
    url: "https://newslaundry-web.qtstage.io/nl-sena",
    "entity-name": null,
    "collection-slug": "sena",
    "section-name": "nl-sena",
    data: {
      color: "#FFFFFF"
    }
  }
];
