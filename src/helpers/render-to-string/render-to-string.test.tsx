/**
 * @jest-environment node
 */

import React from "react";
import { Layout, Head } from "../../atoms";
import { HeroImage } from "../../molecules";
import { storyWithManyJsEmbeds, config } from "../../__fixtures__";
import { renderToString } from "./render-to-string";
import { isValidAmpHtml } from "../../utils/validate-amp";

const dummyLayout = (
  <Layout story={storyWithManyJsEmbeds} config={config}>
    <div>Dummy Amp Story</div>
    <Head>
      <link rel="canonical" href="https://www.reddit.com/" />
      <link rel="icon" type="image/png" sizes="16x16" href="abc" />
    </Head>
    <HeroImage />
  </Layout>
);

test("renderToString function should return valid amp-html", async () => {
  const ampHtml = renderToString({ template: dummyLayout, seo: "", langTag: "ta" });
  const ampValidatorOutput = await isValidAmpHtml(ampHtml);
  expect(ampValidatorOutput).toBe(true);
  expect(ampHtml.includes(`<link data-react-helmet="true" rel="canonical" href="https://www.reddit.com/"/>`)).toBe(
    true
  );
  expect(
    ampHtml.includes(`<link data-react-helmet="true" rel="icon" type="image/png" sizes="16x16" href="abc"/>`)
  ).toBe(true);
  expect(ampHtml.includes(`<html lang="ta" ⚡>`));
});

test("renderToString should add langTag if passed", () => {
  const ampHtml = renderToString({ template: dummyLayout, seo: "", langTag: "ta" });
  expect(ampHtml.includes(`<html lang="ta" ⚡>`));
});
test("renderToString should not add langTag if it's passed", () => {
  const ampHtml = renderToString({ template: dummyLayout, seo: "", langTag: "" });
  expect(ampHtml.includes(`<html ⚡>`));
});
