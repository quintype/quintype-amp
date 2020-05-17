import get from "lodash.get";

export const getWebengageConfig = ({ story, config }) => {
  const webengageConfig = get(config, ["ampConfig", "webengage"], null);
  if (!webengageConfig) return null;
  const { "license-code": licenseCode, "india-data-center": indiaDataCenter } = webengageConfig;
  const websiteUrl = config.publisherConfig["sketches-host"];
  const region = indiaDataCenter ? "in" : "us";
  const baseUrl = "${base}&eventName=Amp Article View&" + getAttributes({ story, config });
  const trackingCode = {
    vars: {
      licenseCode,
      region
    },
    requests: {
      "custom-attributes": {
        baseUrl
      }
    },
    triggers: {
      "custom-attributesTrigger": {
        on: "visible",
        request: "custom-attributes"
      }
    }
  };
  return {
    licenseCode,
    websiteUrl,
    trackingCode
  };
};

const getAttributes = ({ story, config }) => {
  const headline = get(story, "headline", "");
  const storyContentId = get(story, "story-content-id", "");
  const firstSection = get(story, ["sections", "0"], null);
  const category = firstSection ? getCategory(firstSection, config) : "";
  const subCategory = firstSection ? getSubCategory(firstSection) : "";
  const author = get(story, "author-name", "");
  const articleType = get(story, "access", "");
  const tagsArr = get(story, "tags", []);
  const tagsStr = tagsArr.length ? tagsArr.map((tag) => tag.name).join(",") : "";
  const event = "pageview";

  return `ArticleTitle=${headline}&ArticleId=${storyContentId}&Category=${category}&SubCategory=${subCategory}&Author=${author}&ArticleType=${articleType}&tags=${tagsStr}&event=${event}`;
};

const getCategory = (firstSection, config) => {
  const category = "";
  const parentId = firstSection["parent-id"];
  if (parentId) {
    // returns name of parent section or name of firstSection
    let accumulator = [];
    const keys = Object.keys(config.ampConfig["menu-groups"]);
    keys.forEach((menuGroup) => {
      accumulator = accumulator.concat(config.ampConfig["menu-groups"][menuGroup].items);
    });
    const parentSection = accumulator.find((item) => item["item-id"] === parentId);
    return parentSection ? parentSection["section-name"] : getSubCategory(firstSection);
  }
  return category;
};
const getSubCategory = (firstSection) => (firstSection["parent-id"] ? firstSection.name : "");
