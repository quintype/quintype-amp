/**
 * @jest-environment node
 */

import { ampifyStory } from "./ampify-story";
import { isValidAmpHtml } from "../../utils/validate-amp";
import { storyWithManyJsEmbeds, config } from "../../__fixtures__";

test("ampifyStory function should return valid amp-html", async () => {
  const ampHtml = ampifyStory({ story: storyWithManyJsEmbeds, config });
  if (ampHtml instanceof Error) throw ampHtml;
  const ampValidatorOutput = await isValidAmpHtml(ampHtml);
  expect(ampValidatorOutput).toBe(true);
});
