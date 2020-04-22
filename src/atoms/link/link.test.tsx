/**
 * @jest-environment node
 */

import React from "react";
import { Layout, Link } from "../../atoms";
import { textStory, config } from "../../__fixtures__";
import { renderToString } from "../../helpers";
import { isValidAmpHtml } from "../../utils/validate-amp";

describe("Test for Link component", () => {
  it("should add link to head and pass amp validation", async () => {
    const ampHtml = renderToString(<Component />);
    if (ampHtml instanceof Error) throw ampHtml;
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
    expect(ampHtml.includes(`<link data-react-helmet="true" rel="canonical" href="."/>`)).toBe(true);
    expect(
      ampHtml.includes(`<link data-react-helmet="true" rel="icon" type="image/png" sizes="16x16" href="abc"/>`)
    ).toBe(true);
  });
});

const Component = () => {
  return (
    <Layout story={textStory} config={config}>
      <Link rel="canonical" href="." />
      <Link rel="icon" type="image/png" sizes="16x16" href="abc" />
      <div>Lorem Ipsum</div>
    </Layout>
  );
};
