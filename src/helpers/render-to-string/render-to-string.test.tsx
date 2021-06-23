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

describe("renderToString helper function", () => {
  it("should return valid amp-html", async () => {
    const ampHtml = renderToString({ template: dummyLayout, seo: "", langTag: "ta", config });
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
  it("should add langTag if passed", async () => {
    const ampHtml = renderToString({ template: dummyLayout, seo: "", langTag: "ta", config });
    expect(ampHtml.includes(`<html lang="ta" ⚡>`));
  });
  it("should not add langTag if it's passed", async () => {
    const ampHtml = renderToString({ template: dummyLayout, seo: "", langTag: "", config });
    expect(ampHtml.includes(`<html ⚡>`));
  });
  it("should apply transforms on the final string if passed from app", async () => {
    const dummyConfig = genDummyConfig([(str) => str.replace(`id="foo"`, `id="foo" data-foo="bar"`)]);
    const ampHtml = renderToString({ template: dummyLayout, seo: "", langTag: "", config: dummyConfig });
    expect(ampHtml.includes(`<div id="foo" data-foo="bar">Dummy Amp Story</div>`));
  });
});
