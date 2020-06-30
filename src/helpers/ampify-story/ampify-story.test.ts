/**
 * @jest-environment node
 */

import { ampifyStory } from "./ampify-story";
import { isValidAmpHtml } from "../../utils/validate-amp";
import {
  allElementsStory,
  storyWithManyJsEmbeds,
  publisherConfig,
  ampConfig,
  relatedStories,
  configOpts,
  seo
} from "../../__fixtures__";
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
      publisherConfig,
      ampConfig,
      opts,
      relatedStories,
      seo
    });
    expect(ampHtml.includes("Sample Text Story")).toBe(true);
  });

  it("ampifyStory function should return valid amp-html", async () => {
    const ampHtml = ampifyStory({
      story: allElementsStory,
      publisherConfig,
      ampConfig,
      opts: configOpts,
      relatedStories,
      seo,
      infiniteScrollInlineConfig: `[{\"image\":\"https://foo.com/puppies.jpg\",\"title\":\"Puppies Page\",\"url\":\"/puppies\"}]`
    });
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
