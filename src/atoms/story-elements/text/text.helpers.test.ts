/**
 * @jest-environment node
 */

import { conditionExternalLinks } from "./text.helpers";

test("conditionExternalLinks - text element helper function", async () => {
  const dummyText = `<p><a href="https://www.thequint.com/news/india/meity-infosys">An expert committee</a> set up by ... data.</p><p>The “<a href="https://static.mygov.in/rest/s3fs-public/mygov_159453381955063671.pdf">Report by the Committee </a>” recommends that ... citizens.</p>`;
  const dummyConfig = {
    publisherConfig: {
      "sketches-host": "https://www.thequint.com"
    }
  };
  const output = conditionExternalLinks({ text: dummyText, config: dummyConfig });
  expect(output).toBe(
    `<p><a href="https://www.thequint.com/news/india/meity-infosys">An expert committee</a> set up by ... data.</p><p>The “<a href="https://static.mygov.in/rest/s3fs-public/mygov_159453381955063671.pdf" rel=”nofollow” target="_blank">Report by the Committee </a>” recommends that ... citizens.</p>`
  );
});
