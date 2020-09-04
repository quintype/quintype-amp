/**
 * @jest-environment node
 */

import React from "react";
import { Layout, Head } from "../../../atoms";
import { TopSlot } from "../story-page-slots/top-slot";
import { BottomSlot } from "../story-page-slots/bottom-slot";
import { textStory, config } from "../../../__fixtures__";
import { renderToString } from "../../../helpers";
import { isValidAmpHtml } from "../../../utils/validate-amp";

const output = async (layout) => {
  const ampHtml = renderToString({ template: layout, seo: "", langTag: "en" });
  const ampValidatorOutput = await isValidAmpHtml(ampHtml);
  return ampValidatorOutput;
};

test("Slots should pass ampValidation", async () => {
  const dummyLayout = (
    <Layout story={textStory} config={config}>
      <Head>
        <link rel="canonical" href="." />
      </Head>
      <TopSlot />
      <BottomSlot />
    </Layout>
  );
  expect(await output(dummyLayout)).toBe(true);
});
