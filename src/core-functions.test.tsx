/**
 * @jest-environment node
 */

import { renderToString, ampifyTextStory } from "./core-functions";
import { isValidAmpHtml } from "./utils/validate-amp";
import { storyWithManyJsEmbeds } from "./__fixtures__/story.fixture";
import { config } from "./__fixtures__/config.fixture";
import React from "react";
import Layout from "./atoms/layout";
import HeroImage from "./molecules/hero-image";

test("renderToString function should return valid amp-html", async () => {
  const dummyLayout = (
    <Layout story={storyWithManyJsEmbeds} config={config}>
      <div>Dummy Amp Story</div>
      <HeroImage />
    </Layout>
  );
  const ampHtml = renderToString(dummyLayout);
  if (ampHtml instanceof Error) throw ampHtml;
  const ampValidatorOutput = await isValidAmpHtml(ampHtml);
  expect(ampValidatorOutput).toBe(true);
});

test("ampifyStory function should return valid amp-html", async () => {
  const ampHtml = ampifyTextStory({ story: storyWithManyJsEmbeds, config });
  if (ampHtml instanceof Error) throw ampHtml;
  const ampValidatorOutput = await isValidAmpHtml(ampHtml);
  expect(ampValidatorOutput).toBe(true);
});
