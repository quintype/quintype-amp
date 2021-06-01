import { config, visualStory } from "../__fixtures__";
import { getVisualStoryAdsSlot, getVisualStoryConfig } from "./visual-story-config";

describe("getVisualStoryConfig", () => {
  it("should return image and text animation if it's present inside visualStories config in form of array", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: [
          {
            animation: {
              image: {
                animateIn: "zoom-out",
                animateInDuration: "15s",
                animateInDelay: "1s"
              },
              text: {
                animateIn: "fly-in-bottom",
                animateInDuration: "1s",
                animateInDelay: "1s"
              }
            }
          }
        ]
      }
    };

    const textConfig = getVisualStoryConfig(modifiedConfig, visualStory);
    const expectedValue = {
      imageAnimation: {
        "animate-in": "zoom-out",
        "animate-in-delay": "1s",
        "animate-in-duration": "15s"
      },
      textAnimation: {
        "animate-in": "fly-in-bottom",
        "animate-in-delay": "1s",
        "animate-in-duration": "1s"
      }
    };
    expect(textConfig).toMatchObject(expectedValue);
  });

  it("should return image animation if it's present inside visualStories config in form of array", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: [
          {
            animation: {
              image: {
                animateIn: "zoom-out",
                animateInDuration: "15s",
                animateInDelay: "1s"
              }
            }
          }
        ]
      }
    };

    const textConfig = getVisualStoryConfig(modifiedConfig, visualStory);
    const expectedValue = {
      imageAnimation: {
        "animate-in": "zoom-out",
        "animate-in-delay": "1s",
        "animate-in-duration": "15s"
      },
      textAnimation: {}
    };
    expect(textConfig).toMatchObject(expectedValue);
  });

  it("should return text animation if it's present inside visualStories config in form of array", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: [
          {
            animation: {
              image: {},
              text: {
                animateIn: "zoom-out",
                animateInDuration: "15s",
                animateInDelay: "1s"
              }
            }
          }
        ]
      }
    };

    const textConfig = getVisualStoryConfig(modifiedConfig, visualStory);
    const expectedValue = {
      imageAnimation: {},
      textAnimation: {
        "animate-in": "zoom-out",
        "animate-in-delay": "1s",
        "animate-in-duration": "15s"
      }
    };
    expect(textConfig).toMatchObject(expectedValue);
  });

  it("should return empty object if text and image are not passed in visualStories config", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: [{}]
      }
    };

    const imageResponse = getVisualStoryConfig(modifiedConfig, visualStory);
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

  it("should return undefined if ads are not present inside visualStories config", async () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: {}
      }
    };

    const adSlotRes = await getVisualStoryAdsSlot(modifiedConfig, visualStory);
    expect(adSlotRes).toBe(null);
  });
});
