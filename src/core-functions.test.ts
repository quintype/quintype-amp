// import { ampifyTextStory } from "./core-functions";
import { validateAmpHtml } from "./utils/validate-amp";

const invalidAmp = `<a>abc</a>`;
// const validAmp = `<!doctype html>
// <html ⚡>
// <head>
//   <meta charset="utf-8">
//   <title>My AMP Page</title>
//   <link rel="canonical" href="self.html" />
//   <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
//   <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
//   <script async src="https://cdn.ampproject.org/v0.js"></script>
//   <style amp-custom>
//   </style>
// </head>
// <body>
//   <h1>Hello AMPHTML World!</h1>
// </body>
// </html>
// `

test("ampifyStory function", () => {
  return validateAmpHtml(invalidAmp) // this will fail
    .then((data) => {
      expect(data).toBe(true);
    });
});
