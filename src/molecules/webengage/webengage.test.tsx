import React from "react";
import { WebEngageBase } from "./webengage";
import { shallow } from "enzyme";
import { config } from "../../__fixtures__";
import cloneDeep from "lodash.clonedeep";
import { WebPush, WebPushWidget, WebengageSubscribeButton, Analytics } from "../../atoms";
import { story as vikatanStory } from "../../__fixtures__/vikatan/textStory";
import { storyWithManyJsEmbeds } from "../../__fixtures__/";
import { getWebengageConfig, getCategory } from "./helpers";

const vikatanConfig = cloneDeep(config);
vikatanConfig.publisherConfig["sketches-host"] = "https://www.vikatan.com";

const configWithoutWebEngage = cloneDeep(config);
delete configWithoutWebEngage.ampConfig.webengage;

const buggyConfig = cloneDeep(config);
buggyConfig.ampConfig.webengage["tracking-code"] = undefined;

describe("Webengage", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<WebEngageBase config={vikatanConfig} story={vikatanStory} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render webengage component if valid config for it is provided", () => {
    const wrapper = shallow(<WebEngageBase config={vikatanConfig} story={vikatanStory} />);
    expect(wrapper.find(Analytics).exists()).toBeTruthy();
    expect(wrapper.find(WebPush).prop("helper-iframe-url")).toBe(
      "https://www.vikatan.com/api/amp-web-push-helper-frame.html?version=1"
    );
    expect(wrapper.find(WebPush).prop("permission-dialog-url")).toBe(
      "https://www.vikatan.com/api/amp-permission-dialog-web-engage.html?version=1"
    );
    expect(wrapper.find(WebPush).prop("service-worker-url")).toBe(
      "https://www.vikatan.com/api/amp-service-worker-web-engage.js?licensecode=~134105365&version=1"
    );
    expect(wrapper.find(WebPushWidget).children()).toHaveLength(1);
  });
  it("should not render webengage component if config not provided", () => {
    const wrapper = shallow(<WebEngageBase config={configWithoutWebEngage} story={vikatanStory} />);
    expect(wrapper.find(WebPush).exists()).toBeFalsy();
    expect(wrapper.find(WebPushWidget).exists()).toBeFalsy();
  });
  it("should pass custom text down to button", () => {
    const wrapper = shallow(<WebEngageBase config={vikatanConfig} buttonText="lorem ipsum" story={vikatanStory} />);
    expect(wrapper.find(WebengageSubscribeButton).prop("text")).toBe("lorem ipsum");
  });
});

describe("getWebengageConfig helper function", () => {
  it("should return null if webengage config not provided", () => {
    const webengageConfig = getWebengageConfig({ story: storyWithManyJsEmbeds, config: configWithoutWebEngage });
    expect(webengageConfig).toBeNull();
  });
  it("should return correct values", () => {
    const webengageConfig = getWebengageConfig({ story: vikatanStory, config });
    if (!webengageConfig) throw new Error("Unexpected condition in webengage test");
    const { trackingCode, websiteUrl, licenseCode } = webengageConfig;
    const trackingCodeJson = JSON.stringify(trackingCode);
    const expectedTrackingCode =
      '{"vars":{"licenseCode":"~134105365","region":"us"},"requests":{"custom-attributes":{"baseUrl":"${base}&eventName=Amp Article View&ArticleTitle=ஆடைகளை ஊடுருவி படம் எடுக்கிறதா ஒன்ப்ளஸ் 8 ப்ரோ கேமரா... உண்மை என்ன? #VikatanAnalysis&ArticleId=ffa539a0-46f4-4309-8a13-dd1d6dfd8b6e&Category=gadgets&SubCategory=gadgets&Author=ம.காசி விஸ்வநாதன்&ArticleType=null&tags=one plus,apple,technology,smart phones,gadgets,Spy Camera&event=pageview"}},"triggers":{"custom-attributesTrigger":{"on":"visible","request":"custom-attributes"}}}';
    expect(trackingCodeJson).toBe(expectedTrackingCode);
    expect(websiteUrl).toBe("https://www.vikatan.com");
    expect(licenseCode).toBe("~134105365");
  });
});

describe("getCategory helper function", () => {
  it("should return correct category", () => {
    const mockConfig = {
      ampConfig: {
        "menu-groups": {
          default: {
            items: [
              { "item-id": 111, "section-name": "aaa" },
              { "item-id": 222, "section-name": "bbb" }
            ]
          },
          footer: {
            items: [
              { "item-id": 333, "section-name": "ccc" },
              { "item-id": 444, "section-name": "ddd" }
            ]
          },
          navbar: {
            items: [
              { "item-id": 555, "section-name": "eee" },
              { "item-id": 666, "section-name": "fff" }
            ]
          }
        }
      }
    };
    const sectionWithParentId1 = {
      "parent-id": 555,
      name: "Finance"
    };
    const sectionWithParentId2 = {
      "parent-id": 84302,
      name: "Finance"
    };
    const sectionWithoutParentId = {
      "parent-id": null,
      name: ""
    };
    expect(getCategory(sectionWithParentId1, mockConfig)).toBe("eee");
    expect(getCategory(sectionWithParentId2, mockConfig)).toBe("Finance");
    expect(getCategory(sectionWithoutParentId, mockConfig)).toBe("");
  });
});
