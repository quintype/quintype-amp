/**
 * @jest-environment node
 */

import { conditionExternalLinks } from "./text.helpers";

describe("conditionExternalLinks", () => {
  test("should preserve target='_blank', default an undefined target to '_self', and remove an empty target", () => {
    const dummyText = `<p>
    <a href="https://external.com/with-target" target="_blank">Blank target</a>
    <a href="https://external.com/without-target">Undefined target</a>
    <a href="https://external.com/empty-target" target="">Empty target</a>
  </p>`;

    const dummyConfig = {
      publisherConfig: {
        "sketches-host": "https://www.vikatan.com",
        domains: []
      }
    };

    const output = conditionExternalLinks({
      text: dummyText,
      config: dummyConfig
    });

    expect(output).toBe(
      `<p>
    <a href="https://external.com/with-target" rel="nofollow noopener" target="_blank">Blank target</a>
    <a href="https://external.com/without-target" rel="nofollow noopener" target="_self">Undefined target</a>
    <a href="https://external.com/empty-target" rel="nofollow noopener">Empty target</a>
  </p>`
    );
  });

  test("should not change text containing no external links", () => {
    const dummyText = `<p><strong>The MOM of the Legal Education Committee of the BCI conducted on <a>30<sup>th</sup> April</a>, 2010 de-recognises the following law colleges and has suggested changes in some colleges-</strong></p>`;

    const dummyConfig = {
      publisherConfig: {
        "sketches-host": "https://www.barandbench.com",
        domains: []
      }
    };

    const output = conditionExternalLinks({
      text: dummyText,
      config: dummyConfig
    });

    expect(output).toBe(dummyText);
  });
});
