/**
 * @jest-environment node
 */

import React from "react";
import { Layout, Link } from "../../atoms";
import { HeroImage } from "../../molecules";
import { storyWithManyJsEmbeds, config } from "../../__fixtures__";
import { renderToString } from "./render-to-string";
import { isValidAmpHtml } from "../../utils/validate-amp";

test("renderToString function should return valid amp-html", async () => {
  const dummyLayout = (
    <Layout story={storyWithManyJsEmbeds} config={config}>
      <div>Dummy Amp Story</div>
      <Link rel="canonical" href="https://www.reddit.com/" />
      <Link rel="icon" type="image/png" sizes="16x16" href="abc" />
      <HeroImage />
    </Layout>
  );
  const { ampHtml } = renderToString(dummyLayout);
  if (ampHtml instanceof Error) throw ampHtml;
  const ampValidatorOutput = await isValidAmpHtml(ampHtml);
  expect(ampValidatorOutput).toBe(true);
  expect(ampHtml.includes(`<link data-react-helmet="true" rel="canonical" href="https://www.reddit.com/"/>`)).toBe(
    true
  );
  expect(
    ampHtml.includes(`<link data-react-helmet="true" rel="icon" type="image/png" sizes="16x16" href="abc"/>`)
  ).toBe(true);
});
