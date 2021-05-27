import { config, visualStory } from "../../../__fixtures__";
import { getImageAnimationProps } from "./web-story-page-components.helpers";

describe("getImageAnimationProps", () => {
  it("should return image animation if visualStories config is present in form of array of object", () => {
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

    const imageResponse = getImageAnimationProps(modifiedConfig, visualStory);
    const expectedValue = {
      "animate-in": "zoom-in",
      "animate-in-delay": "1s",
      "animate-in-duration": "10s"
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

    const imageResponse = getImageAnimationProps(modifiedConfig, visualStory);
    const expectedValue = {
      "animate-in": "zoom-in",
      "animate-in-delay": "1s",
      "animate-in-duration": "10s"
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

    const imageResponse = getImageAnimationProps(modifiedConfig, visualStory);
    const expectedValue = {};
    expect(imageResponse).toMatchObject(expectedValue);
  });
});
