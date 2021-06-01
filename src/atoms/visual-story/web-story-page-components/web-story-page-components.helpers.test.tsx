import { config, visualStory } from "../../../__fixtures__";
import { getAnimationProps } from "./web-story-page-components.helpers";

describe("getAnimationProps", () => {
  it("should return image animation if visualStories config is present in form of array", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: [
          {
            animation: {
              image: {
                animateIn: "zoom-in",
                animateInDuration: "10s",
                animateInDelay: "1s"
              }
            }
          }
        ]
      }
    };

    const imageResponse = getAnimationProps(modifiedConfig, visualStory);
    const expectedValue = {
      imageAnimation: { "animate-in": "zoom-in", "animate-in-delay": "1s", "animate-in-duration": "10s" },
      textAnimation: {}
    };
    expect(imageResponse).toMatchObject(expectedValue);
  });

  it("should return image animation if visualStories config is present in form of object", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: {
          animation: {
            image: {
              animateIn: "zoom-in",
              animateInDuration: "10s",
              animateInDelay: "1s"
            }
          }
        }
      }
    };

    const imageResponse = getAnimationProps(modifiedConfig, visualStory);
    const expectedValue = {
      imageAnimation: {
        "animate-in": "zoom-in",
        "animate-in-delay": "1s",
        "animate-in-duration": "10s"
      },
      textAnimation: {}
    };
    expect(imageResponse).toMatchObject(expectedValue);
  });

  it("should return empty object if visualStories is not present", () => {
    const modifiedConfig = config;
    modifiedConfig.opts = {
      featureConfig: {
        visualStories: [{}]
      }
    };

    const imageResponse = getAnimationProps(modifiedConfig, visualStory);
    const expectedValue = {};
    expect(imageResponse).toMatchObject(expectedValue);
  });
});
