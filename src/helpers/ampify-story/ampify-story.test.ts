/**
 * @jest-environment node
 */

import { ampifyStory } from "./ampify-story";
import { isValidAmpHtml } from "../../utils/validate-amp";
import { storyWithManyJsEmbeds, publisherConfig, ampConfig } from "../../__fixtures__";
import { sampleTextStory } from "./sampleTextStory";

describe("Ampify Story", () => {
  it("ampifyStory function should return valid amp-html", async () => {
    const ampHtml = ampifyStory({ story: storyWithManyJsEmbeds, publisherConfig, ampConfig });
    if (ampHtml instanceof Error) throw ampHtml;
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });

  it("should render publisher template for text", async () => {
    const opts = {
      templates: {
        text: sampleTextStory
      }
    };
    const ampHtml = ampifyStory({ story: storyWithManyJsEmbeds, publisherConfig, ampConfig, opts });
    if (ampHtml instanceof Error) throw ampHtml;
    expect(ampHtml.includes("Sample Text Story")).toBe(true);
  });
});
