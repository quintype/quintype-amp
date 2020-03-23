/**
 * @jest-environment node
 */

import { ampifyStory } from "./ampify-story";
import { isValidAmpHtml } from "../../utils/validate-amp";
import { storyWithManyJsEmbeds, publisherConfig, ampConfig } from "../../__fixtures__";

test("ampifyStory function should return valid amp-html", async () => {
  const ampHtml = ampifyStory({ story: storyWithManyJsEmbeds, publisherConfig, ampConfig });
  if (ampHtml instanceof Error) throw ampHtml;
  const ampValidatorOutput = await isValidAmpHtml(ampHtml);
  expect(ampValidatorOutput).toBe(true);
});
