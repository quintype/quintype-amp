import { config, visualStory } from "../__fixtures__";
import { getVisualStoryAdConfig, getVisualStoryConfig } from "./visual-story-config";

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

  it("should return text animation if it's present and image as default if not present inside visualStories config in form of array", () => {
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
      imageAnimation: {
        "animate-in": "zoom-in",
        "animate-in-delay": "1s",
        "animate-in-duration": "10s"
      },
      textAnimation: {
        "animate-in": "zoom-out",
        "animate-in-delay": "1s",
        "animate-in-duration": "15s"
      }
    };
    expect(textConfig).toMatchObject(expectedValue);
  });
});

describe("getVisualStoryAdConfig", () => {
  it("should return doubleclick adSlot if present inside visualStories config as array of object", () => {
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

    const { doubleClick } = getVisualStoryAdConfig(modifiedConfig, visualStory);
    expect(doubleClick).toBe("/1009127/FOO_AMP_TOP-1");
  });

  it("should return doubleclick adSlot if ads are present inside visualStories config", async () => {
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

    const { doubleClick } = await getVisualStoryAdConfig(modifiedConfig, visualStory);
    expect(doubleClick).toBe("/1009127/FOO_AMP_TOP-1");
  });

  it("should return undefined if ads are not present inside visualStories config", async () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: {}
      }
    };

    const { doubleClick } = await getVisualStoryAdConfig(modifiedConfig, visualStory);
    expect(doubleClick).toBe(null);
  });
});
