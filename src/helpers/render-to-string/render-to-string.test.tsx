/**
 * @jest-environment node
 */

import React from "react";
import { Layout, Head } from "../../atoms";
import { HeroImage } from "../../molecules";
import { storyWithManyJsEmbeds, config } from "../../__fixtures__";
import { renderToString } from "./render-to-string";
import { isValidAmpHtml } from "../../utils/validate-amp";
import cloneDeep from "lodash.clonedeep";

const dummyLayout = (
  <Layout story={storyWithManyJsEmbeds} config={config}>
    <div id="foo">Dummy Amp Story</div>
    <Head>
      <link rel="canonical" href="https://www.reddit.com/" />
      <link rel="icon" type="image/png" sizes="16x16" href="abc" />
    </Head>
    <HeroImage />
  </Layout>
);
function genDummyConfig(arrayOfTransforms) {
  const clonedConfig = cloneDeep(config);
  clonedConfig.opts.transforms = arrayOfTransforms;
  return clonedConfig;
}
const configWithLangTagAndRtl = cloneDeep(config);
configWithLangTagAndRtl.publisherConfig.language = {
  "iso-code": "ta",
  direction: "rtl"
};

describe("renderToString helper function", () => {
  it("should return valid amp-html", async () => {
    const ampHtml = renderToString({ template: dummyLayout, seo: "", config });
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
  it("should add langTag if present", async () => {
    const ampHtml = renderToString({ template: dummyLayout, seo: "", config: configWithLangTagAndRtl });
    expect(ampHtml.includes(`<html lang="ta"`));
  });
  it("should not add langTag and text direction if not passed", async () => {
    const ampHtml = renderToString({ template: dummyLayout, seo: "", config });
    expect(ampHtml.includes(`<html ⚡>`));
  });
  it("should add text direction if present", async () => {
    const ampHtml = renderToString({ template: dummyLayout, seo: "", config: configWithLangTagAndRtl });
    expect(ampHtml.includes(`<html lang="ta" dir="rtl" ⚡>`));
  });
  it("should apply transforms on the final string if passed from app", async () => {
    const dummyConfig = genDummyConfig([(str) => str.replace(`id="foo"`, `id="foo" data-foo="bar"`)]);
    const ampHtml = renderToString({ template: dummyLayout, seo: "", config: dummyConfig });
    expect(ampHtml.includes(`<div id="foo" data-foo="bar">Dummy Amp Story</div>`));
  });
});
