/**
 * @jest-environment node
 */

import { ampifyStory } from "./ampify-story";
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
