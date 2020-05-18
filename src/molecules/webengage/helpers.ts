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
  const headline = story.headline || "";
  const storyContentId = story["story-content-id"] || "";
  const firstSection = get(story, ["sections", "0"], null);
  const category = firstSection ? getCatergoryFromSection(firstSection, config) : "";
  const subCategory = firstSection ? getSubCategoryFromSection(firstSection) : "";
  const author = story["author-name"] || "";
  const articleType = story.access || "";
  const tagsArr = get(story, "tags", []);
  const tagsStr = tagsArr.length ? tagsArr.map((tag) => tag.name).join(",") : "";
  const event = "pageview";

  return `ArticleTitle=${headline}&ArticleId=${storyContentId}&Category=${category}&SubCategory=${subCategory}&Author=${author}&ArticleType=${articleType}&tags=${tagsStr}&event=${event}`;
};

export const getCatergoryFromSection = (section, config) => {
  const category = "";
  const parentId = section["parent-id"];
  if (parentId) {
    // returns name of parent section or name of section
    const sections = config.publisherConfig.sections;
    const parentSection = sections.find((sec) => sec.id === parentId);
    return parentSection ? parentSection.name : section.name;
  }
  return category;
};
const getSubCategoryFromSection = (section) => (section["parent-id"] ? section.name : "");
