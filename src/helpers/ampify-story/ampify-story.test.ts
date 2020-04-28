/**
 * @jest-environment node
 */

import { ampifyStory } from "./ampify-story";
import { isValidAmpHtml } from "../../utils/validate-amp";
import { storyWithManyJsEmbeds, publisherConfig, ampConfig, relatedStories, configOpts } from "../../__fixtures__";
import { sampleTextStory } from "./sampleTextStory";

describe("Ampify Story with custom opts", () => {
  it("should render publisher template for text", async () => {
    const opts = {
      templates: {
        text: sampleTextStory
      }
    };
    const { ampHtml } = ampifyStory({
      story: storyWithManyJsEmbeds,
      relatedStories,
      publisherConfig,
      ampConfig,
      opts
    });
    expect(ampHtml.includes("Sample Text Story")).toBe(true);
  });

  it("Should return valid amp-html", async () => {
    const { ampHtml } = ampifyStory({
      story: storyWithManyJsEmbeds,
      relatedStories,
      publisherConfig,
      ampConfig,
      opts: configOpts
    });
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
