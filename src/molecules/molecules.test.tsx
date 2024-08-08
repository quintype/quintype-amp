/**
 * @jest-environment node
 */

import { renderToString } from "../helpers";
import { isValidAmpHtml } from "../utils/validate-amp";
import { textStory, config } from "../__fixtures__";
import { HeaderCard } from "./index";
import React from "react";
import { Layout, Head } from "../atoms";

describe("Molecules", () => {
  it("HeaderCard should render valid AMP Html", async () => {
    const LayoutForHeaderCard = () => (
      <Layout story={textStory} config={config}>
        <Head>
          <link rel="canonical" href="." />
        </Head>
        <HeaderCard />
      </Layout>
    );
    const ampHtml = renderToString({ template: <LayoutForHeaderCard />, seo: "", config, story: {} });
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
