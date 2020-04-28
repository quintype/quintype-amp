import { Helmet } from "react-helmet";
import { ReactElement } from "react";
import { ServerStyleSheet } from "styled-components";
import ReactDOMServer from "react-dom/server";

export function renderToString(component) {
  // check if layout can be rendered (i.e. if title and stuff is present), else throw error
  let str = "";
  try {
    // const check = checkLayout()
    // if (check instanceof Error) throw check
    const { title, script, customStyles, link, metaTags } = getHeadTagsFromHelmet(component);
    const { htmlStr, styles } = getHtmlAndStyledComponentsStyles(component);
    let relevantMetaTags = stripIrrevelantMetaTags(metaTags);
    relevantMetaTags += addCssInfoAsMetaTag(relevantMetaTags, customStyles, styles);
    str += `${headStart}\n`;
    str += `${relevantMetaTags}\n`;
    str += `${title}\n`;
    str += `${link}\n`;
    str += `${script}\n`;
    str += `<style amp-custom>${customStyles}${styles}\n</style>`;
    str += `${headEndBodyStart}\n`;
    str += `${htmlStr}\n`;
    str += `${bodyEnd}`;
    return { ampHtml: str, invalidElementsPresent: invalidStoryElementsPresent(metaTags) };
  } catch (e) {
    return e;
  }
}

const stripStyleTag = (str: string) => str.replace(/<style[^>]*>|<\/style>/g, "");

const getHeadTagsFromHelmet = (component) => {
  ReactDOMServer.renderToStaticMarkup(component); // without this, helmet.script returns empty
  const helmet = Helmet.renderStatic();
  const title = helmet.title.toString();
  const script = helmet.script.toString();
  const metaTags = helmet.meta.toString();
  const link = helmet.link.toString();
  let customStyles = helmet.style.toString();
  customStyles = stripStyleTag(customStyles);
  return { title, script, customStyles, metaTags, link };
};

const getHtmlAndStyledComponentsStyles = (component: ReactElement) => {
  const sheet = new ServerStyleSheet();
  const htmlStr = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(component));
  let styles = sheet.getStyleTags();
  styles = stripStyleTag(styles);
  sheet.seal();
  return { htmlStr, styles };
};

const invalidStoryElementsPresent = (metaTags) => {
  return /name="invalid-elements-present"/.test(metaTags);
};
const stripIrrevelantMetaTags = (metaTags) => {
  return metaTags.replace(/<meta[^\/]*name="invalid-elements-present"[^\/]*\/>/, "");
};
const addCssInfoAsMetaTag = (metaTags, css1, css2) =>
  `${metaTags}\n<meta name="length of CSS" content="${(css1 + css2).length}">`;

const headStart = `<!doctype html>
<html ⚡ lang="en">
  <head>
    <meta charset="utf-8">\n
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">\n
    <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">\n
    <script async src="https://cdn.ampproject.org/v0.js"></script>\n
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>\n`;
const headEndBodyStart = `</head>\n<body>`;
const bodyEnd = `</body>\n</html>`;
