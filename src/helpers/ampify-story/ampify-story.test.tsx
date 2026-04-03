/**
 * @jest-environment node
 */

import { ampifyStory, isVisualStory } from "./ampify-story";
import { isValidAmpHtml } from "../../utils/validate-amp";
import {
  allElementsStory,
  textStory,
  publisherConfig,
  ampConfig,
  configOpts,
  seo,
  visualStory
} from "../../__fixtures__";
import React from "react";
import { Head } from "../../atoms";

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
      additionalConfig: null,
      opts: configOpts,
      seo
    });
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
  it("ampifyStory function should return valid amp-html for a visual story", async () => {
    const newOpts = {
      slots: {
        story: {
          "top-slot": () => (
            <Head>
              <style>{`
        amp-story-page[active] .qt-amp-visual-story-img > img {
          animation: zoom 5s linear forwards;
        }
        amp-story-page[active] .qt-amp-visual-story-img-cover > img {
          animation: zoom 5s linear forwards;
        }
        @keyframes zoom{0%{transform:scale(1)}100%{transform:scale(1.3)}}
      `}</style>
            </Head>
          )
        }
      },
      featureConfig: {
        visualStories: {
          autoAdvanceAfter: "10s",
          ads: {
            doubleclick: {
              dataSlot: "/1009127/Viaktan_AMP_TOP"
            }
          }
        }
      }
    };
    const ampHtml = ampifyStory({
      story: visualStory,
      publisherConfig,
      ampConfig,
      additionalConfig: null,
      opts: newOpts,
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
      additionalConfig: null,
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
      additionalConfig: null,
      opts,
      seo
    });
    expect(customVideoTemplate.mock.calls.length).toBe(1);
    expect(customTextTemplate.mock.calls.length).toBe(0);
    expect(customLiveBlogTemplate.mock.calls.length).toBe(0);
  });

  describe("isVisualStory", () => {
    it("should return true for a visual story", () => {
      expect(isVisualStory(visualStory)).toBe(true);
    });

    it("should return false for a text story", () => {
      expect(isVisualStory(textStory)).toBe(false);
    });

    it("should return false for a live-blog story", () => {
      const liveBlogStory = mockStoryType("live-blog");
      expect(isVisualStory(liveBlogStory)).toBe(false);
    });

    it("should return true for a story with visual-story template", () => {
      const visualStoryByTemplate = mockStoryType("visual-story");
      expect(isVisualStory(visualStoryByTemplate)).toBe(true);
    });
  });
});
