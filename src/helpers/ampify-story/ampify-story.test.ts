/**
 * @jest-environment node
 */

import { ampifyStory } from "./ampify-story";
import { isValidAmpHtml } from "../../utils/validate-amp";
import { storyWithManyJsEmbeds, publisherConfig, ampConfig, relatedStoriesObj, configOpts } from "../../__fixtures__";
import { sampleTextStory } from "./sampleTextStory";

describe("Ampify Story with custom opts", () => {
  it("should render publisher template for text", async () => {
    const opts = {
      templates: {
        text: sampleTextStory
      }
    };
    const ampHtml = ampifyStory({
      story: storyWithManyJsEmbeds,
      relatedStories: relatedStoriesObj,
      publisherConfig,
      ampConfig,
      opts
    });
    if (ampHtml instanceof Error) throw ampHtml;
    expect(ampHtml.includes("Sample Text Story")).toBe(true);
  });

  it("ampifyStory function should return valid amp-html", async () => {
    const ampHtml = ampifyStory({
      story: storyWithManyJsEmbeds,
      relatedStories: relatedStoriesObj,
      publisherConfig,
      ampConfig,
      opts: configOpts
    });
    if (ampHtml instanceof Error) throw ampHtml;
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
