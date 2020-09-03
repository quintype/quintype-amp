/**
 * @jest-environment node
 */

import { ampifyStory, getLangTag } from "./ampify-story";
import { isValidAmpHtml } from "../../utils/validate-amp";
import { allElementsStory, textStory, publisherConfig, ampConfig, configOpts, seo, config } from "../../__fixtures__";

function mockStoryType(desiredType) {
  const story = { ...textStory };
  delete story["story-template"];
  story["story-template"] = desiredType;
  return story;
}

describe("Ampify Story", () => {
  it("ampifyStory function should return valid amp-html", async () => {
    const ampHtml = ampifyStory({
      story: allElementsStory,
      publisherConfig,
      ampConfig,
      opts: configOpts,
      seo
    });
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
  it("should render custom template when passed", async () => {
    const customTemplate = jest.fn();
    const opts = {
      templates: {
        text: customTemplate
      }
    };
    ampifyStory({
      story: textStory,
      publisherConfig,
      ampConfig,
      opts,
      seo
    });
    expect(customTemplate.mock.calls.length).toBe(1);
  });
  it("should render the correct custom template as per story", async () => {
    const customTextTemplate = jest.fn();
    const customVideoTemplate = jest.fn();
    const customLiveBlogTemplate = jest.fn();
    const opts = {
      templates: {
        text: customTextTemplate,
        video: customVideoTemplate,
        "live-blog": customLiveBlogTemplate
      }
    };
    ampifyStory({
      story: mockStoryType("video"),
      publisherConfig,
      ampConfig,
      opts,
      seo
    });
    expect(customVideoTemplate.mock.calls.length).toBe(1);
    expect(customTextTemplate.mock.calls.length).toBe(0);
    expect(customLiveBlogTemplate.mock.calls.length).toBe(0);
  });
});

describe("getLangTag helper function", () => {
  it("should pick lang tag if passed in featureConfig", () => {
    const modifiedConfig = { ...config };
    modifiedConfig.publisherConfig["sketches-host"] = "bar";
    modifiedConfig.opts = {
      featureConfig: {
        langTag: {
          foo: "de",
          bar: "fr",
          baz: "hi"
        }
      }
    };
    expect(getLangTag(modifiedConfig)).toBe("fr");
  });
  it("should return en if featureConfig not provided", () => {
    const modifiedConfig = { ...config };
    modifiedConfig.opts = {
      featureConfig: {}
    };
    expect(getLangTag(modifiedConfig)).toBe("en");
  });
});
