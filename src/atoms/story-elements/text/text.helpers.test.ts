/**
 * @jest-environment node
 */

import { conditionExternalLinks } from "./text.helpers";

test("conditionExternalLinks should add target blank on external links without modifying rel attribute", async () => {
  const dummyText = `<p><a href="https://www.vikatan.com/a/bc/def">An expert committee</a> set up by ... data.</p><p>The “<a href="https://static.mygov.in/rest/s3fs-public/mygov_159453381955063671.pdf">Report by the Committee </a>” recommends that ... citizens. Lorem <a href="https://sports.vikatan.com/aaaa/bbb/ccc.jpg">ipsum</a> dolor sit <a href="https://cinema.vikatan.com/foo/123" >amet</a>, consectetur <a href="https://www.facebook.com/mark/zucc">adipiscing</a> elit</p>`;
  const dummyConfig = {
    publisherConfig: {
      "sketches-host": "https://www.vikatan.com",
      domains: [
        {
          name: "entertainment",
          slug: "entertainment",
          "host-url": "https://cinema.vikatan.com",
          "beta-host-url": null,
          "home-collection-id": 20045,
          "section-ids": [8956],
          "menu-groups": []
        },
        {
          name: "sports",
          slug: "sports",
          "host-url": "https://sports.vikatan.com",
          "beta-host-url": null,
          "home-collection-id": 23011,
          "section-ids": [8967],
          "menu-groups": []
        }
      ]
    }
  };
  const output = conditionExternalLinks({ text: dummyText, config: dummyConfig });
  expect(output).toBe(
    `<p><a href="https://www.vikatan.com/a/bc/def">An expert committee</a> set up by ... data.</p><p>The \u201c<a href="https://static.mygov.in/rest/s3fs-public/mygov_159453381955063671.pdf" target="_blank">Report by the Committee </a>\u201d recommends that ... citizens. Lorem <a href="https://sports.vikatan.com/aaaa/bbb/ccc.jpg">ipsum</a> dolor sit <a href="https://cinema.vikatan.com/foo/123" >amet</a>, consectetur <a href="https://www.facebook.com/mark/zucc" target="_blank">adipiscing</a> elit</p>`
  );
});

test("conditionExternalLinks should not add target blank on external links that already have a target attribute", async () => {
  const dummyText = `<p><a href="https://www.facebook.com/mark/zucc" target="_blank">external link with target</a> and <a href="https://www.facebook.com/mark/zucc2" rel="nofollow">external link with rel from CMS</a></p>`;
  const dummyConfig = {
    publisherConfig: {
      "sketches-host": "https://www.vikatan.com",
      domains: []
    }
  };
  const output = conditionExternalLinks({ text: dummyText, config: dummyConfig });
  expect(output).toBe(
    `<p><a href="https://www.facebook.com/mark/zucc" target="_blank">external link with target</a> and <a href="https://www.facebook.com/mark/zucc2" target="_blank" rel="nofollow">external link with rel from CMS</a></p>`
  );
});

test("conditionExternalLinks should not introduce any change in text elements containing no external links", async () => {
  const dummyText = `<p><strong>The MOM of the Legal Education Committee of the BCI conducted on <a>30<sup>th</sup> April</a>, 2010 de-recognises the following law colleges and has suggested changes in some colleges-</strong></p>`;
  const dummyConfig = {
    publisherConfig: {
      "sketches-host": "https://www.barandbench.com",
      domains: []
    }
  };

  const output = conditionExternalLinks({ text: dummyText, config: dummyConfig });
  expect(output).toBe(dummyText);
});

test("conditionExternalLinks should treat www and non-www variants of sketches-host as internal", async () => {
  const dummyText = `<p><a href="https://www.analyticsinsight.net/article/foo">internal www link</a> and <a href="https://analyticsinsight.net/article/bar">internal non-www link</a> and <a href="https://www.facebook.com/foo">external link</a></p>`;
  const dummyConfig = {
    publisherConfig: {
      "sketches-host": "https://analyticsinsight.net",
      domains: []
    }
  };
  const output = conditionExternalLinks({ text: dummyText, config: dummyConfig });
  expect(output).toBe(
    `<p><a href="https://www.analyticsinsight.net/article/foo">internal www link</a> and <a href="https://analyticsinsight.net/article/bar">internal non-www link</a> and <a href="https://www.facebook.com/foo" target="_blank">external link</a></p>`
  );
});

test("conditionExternalLinks should treat www and non-www variants of domain host-urls as internal", async () => {
  const dummyText = `<p><a href="https://www.sports.example.com/foo">internal www domain link</a> and <a href="https://sports.example.com/bar">internal non-www domain link</a> and <a href="https://www.twitter.com/foo">external link</a></p>`;
  const dummyConfig = {
    publisherConfig: {
      "sketches-host": "https://www.example.com",
      domains: [
        {
          name: "sports",
          slug: "sports",
          "host-url": "https://sports.example.com",
          "section-ids": []
        }
      ]
    }
  };
  const output = conditionExternalLinks({ text: dummyText, config: dummyConfig });
  expect(output).toBe(
    `<p><a href="https://www.sports.example.com/foo">internal www domain link</a> and <a href="https://sports.example.com/bar">internal non-www domain link</a> and <a href="https://www.twitter.com/foo" target="_blank">external link</a></p>`
  );
});

test("conditionExternalLinks should return text unchanged when no sketches-host or domains are configured", async () => {
  const dummyText = `<p><a href="https://www.facebook.com/foo">some link</a></p>`;
  const dummyConfig = {
    publisherConfig: {
      domains: []
    }
  };
  const output = conditionExternalLinks({ text: dummyText, config: dummyConfig });
  expect(output).toBe(dummyText);
});
