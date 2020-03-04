/**
 * @jest-environment node
 */

import { ampifyTextStory } from "./core-functions"
import { isValidAmpHtml } from "./utils/validate-amp";
import { storyWithManyJsEmbeds } from "./__fixtures__/story.fixture";
import { config } from "./__fixtures__/config.fixture";

test("ampifyStory function", async () => {
  const ampHtml = ampifyTextStory({story: storyWithManyJsEmbeds, config})
  if(ampHtml instanceof Error) throw ampHtml
  const ampValidatorOutput =  await(isValidAmpHtml(ampHtml))
  expect(ampValidatorOutput).toBe(true)
});
