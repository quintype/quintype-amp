import { config, visualStory } from "../__fixtures__";
import { getVisualStoryAdsSlot, getVisualStoryTextConfig } from "./visual-story-config";

describe("getVisualStoryTextConfig", () => {
  it("should return text animation if visualStories config is present in form of array of object", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: [
          {
            animation: {
              image: {},
              text: {
                animateIn: "zoom-in",
                animateInDuration: "10s",
                animateInDelay: "1s"
              }
            }
          }
        ]
      }
    };

    const textConfig = getVisualStoryTextConfig(modifiedConfig, visualStory);
    const expectedValue = {
      "animate-in": "zoom-in",
      "animate-in-delay": "1s",
      "animate-in-duration": "10s"
    };
    expect(textConfig).toMatchObject(expectedValue);
  });

  it("should return empty object if text is not present inside visualStories config", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: [{}]
      }
    };

    const imageResponse = getVisualStoryTextConfig(modifiedConfig, visualStory);
    const expectedValue = {};
    expect(imageResponse).toMatchObject(expectedValue);
  });
});

describe("getVisualStoryAdsSlot", () => {
  it("should return adSlot if ads are present inside visualStories config as array of object", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: [
          {
            ads: {
              doubleclick: {
                dataSlot: "/1009127/FOO_AMP_TOP-1"
              }
            }
          }
        ]
      }
    };

    const adSlot = getVisualStoryAdsSlot(modifiedConfig, visualStory);
    expect(adSlot).toBe("/1009127/FOO_AMP_TOP-1");
  });

  it("should return adSlot if ads are present inside visualStories config", async () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: {
          ads: {
            doubleclick: {
              dataSlot: "/1009127/FOO_AMP_TOP-1"
            }
          }
        }
      }
    };

    const adSlotRes = await getVisualStoryAdsSlot(modifiedConfig, visualStory);
    expect(adSlotRes).toBe("/1009127/FOO_AMP_TOP-1");
  });

  it("should return empty object if text is not present inside visualStories config", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: [{}]
      }
    };

    const imageResponse = getVisualStoryTextConfig(modifiedConfig, visualStory);
    const expectedValue = {};
    expect(imageResponse).toMatchObject(expectedValue);
  });
});
