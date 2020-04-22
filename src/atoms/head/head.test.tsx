/**
 * @jest-environment node
 */

import React from "react";
import { Layout, Head } from "../../atoms";
import { HeroImage } from "../../molecules";
import { textStory, publisherConfig, ampConfig } from "../../__fixtures__";
import { ampifyStory } from "../../helpers";
import { isValidAmpHtml } from "../../utils/validate-amp";

describe("Test for head component", () => {
  it("should put given components in head and pass amp validation", async () => {
    const opts = {
      templates: {
        text: sampleTextStory
      }
    };
    const { ampHtml } = ampifyStory({ story: textStory, publisherConfig, ampConfig, opts });
    if (ampHtml instanceof Error) throw ampHtml;
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
    expect(ampHtml.includes(`<title data-react-helmet="true">🐈 My Page 🐈</title>`)).toBe(true);
    expect(
      ampHtml.includes(
        `<script data-react-helmet="true" async custom-element="amp-mathml" src="https://cdn.ampproject.org/v0/amp-mathml-0.1.js"></script>`
      )
    ).toBe(true);
  });
});

const sampleTextStory = ({ story, config }) => {
  return (
    <Layout story={story} config={config}>
      <Head>
        <script async={undefined} custom-element="amp-mathml" src="https://cdn.ampproject.org/v0/amp-mathml-0.1.js" />
        <title>🐈 My Page 🐈</title>
      </Head>
      <HeroImage />
      <div>Math Stuff below</div>
      <amp-mathml layout="container" data-formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]" />
      <div>Math Stuff above</div>
    </Layout>
  );
};
