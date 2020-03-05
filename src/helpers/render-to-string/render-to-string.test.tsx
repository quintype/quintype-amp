/**
 * @jest-environment node
 */

import React from "react";
import { Layout } from "../../atoms";
import { HeroImage } from "../../molecules";
import { storyWithManyJsEmbeds, config } from "../../__fixtures__";
import { renderToString } from "./render-to-string";
import { isValidAmpHtml } from "../../utils/validate-amp";

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
