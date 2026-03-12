import { Helmet } from "react-helmet";
import { ReactElement } from "react";
import { ServerStyleSheet } from "styled-components";
import ReactDOMServer from "react-dom/server";
import { applyTransforms } from "../apply-transforms";
import get from "lodash.get";

/**
 * The renderToString function generates AMP Html string from react component.
 * Styles created using styled components and those added using react-helmet are merged. script, meta, link tags, seo are added to the head
 *
 * @category Helper
 * @module RenderToString
 * @function renderToString
 * @param {Object} params [mandatory] object containing parameters
 * @param {Object} params.template template react component
 * @param {string} params.seo the SEO string that is to be added in the head
 * @param {string} params.langTag the lang tag that is to be added to the html element. eg: en, fr
 * @param {Object} params.config the config object
 * @param {Object} params.story the story object
 * @returns {string} ready to render amp html
 */
export function renderToString({ template, seo, config, story }) {
  const customMetaTags = getCustomMetaTagStr({ story, config });
  let str = "";
  try {
    const { htmlStr, styles } = getHtmlAndStyledComponentsStyles(template);
    const { title, script, customStyles, link, metaTags } = getHeadTagsFromHelmet();
    const { ampCustomStyles, otherMetaTags } = extractAmpCustomStyles(customMetaTags);
    const seoStr = `${metaTags}${link}${seo}`;
    str += getHeadStartStr(config);
    str += `${seoStr}`;
    str += `${script}`;
    str += `<style amp-custom>${customStyles}${styles}${ampCustomStyles}</style>`;
    str += `${ampBoilerplate}`;
    str += `${title}`;
    if (otherMetaTags) str += otherMetaTags;
    str += `${headEndBodyStart}`;
    str += `${htmlStr}`;
    str += `${bodyEnd}`;
    return applyTransforms({ config, ampHtml: str });
  } catch (e) {
    return e;
  }
}

const stripStyleTag = (str: string) => str.replace(/<style[^>]*>|<\/style>/g, "");
const discardEmptyTitle = (str: string) => str.replace(/<title data-react-helmet="true"><\/title>/, "");

/**
 * Extracts amp-custom style content from customMetaTags and returns:
 * - ampCustomStyles: the content inside <style amp-custom> tags
 * - otherMetaTags: remaining meta tags without the <style amp-custom> tag
 */
const extractAmpCustomStyles = (customMetaTags: string): { ampCustomStyles: string; otherMetaTags: string } => {
  if (!customMetaTags) {
    return { ampCustomStyles: "", otherMetaTags: "" };
  }

  let ampCustomStyles = "";

  const otherMetaTags = customMetaTags
    .replace(/<style\s+amp-custom[^>]*>([\s\S]*?)<\/style>/gi, (_match, styleContent) => {
      ampCustomStyles += styleContent;
      return ""; // Remove the tag from the output
    })
    .trim();

  return { ampCustomStyles, otherMetaTags };
};

const getHeadTagsFromHelmet = () => {
  // IMP NOTE! - this has to come after `ReactDOMServer.renderToStaticMarkup` has run otherwise helmet.script returns empty
  const helmet = Helmet.renderStatic();
  const titleStr = helmet.title.toString();
  const title = discardEmptyTitle(titleStr);
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

const getHeadStartStr = (config) => {
  const langTag = get(config, ["publisherConfig", "language", "iso-code"], null);
  const dir = get(config, ["publisherConfig", "language", "direction"], null);
  const langTagStr = langTag ? `lang="${langTag}"` : "";
  const dirAttr = dir ? `dir="${dir}"` : "";
  return `<!doctype html>
  <html ${langTagStr} ${dirAttr} ⚡>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
      <script async src="https://cdn.ampproject.org/v0.js"></script>`;
};
const ampBoilerplate = `<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>`;
const headEndBodyStart = `</head><body>`;
const bodyEnd = `</body></html>`;

const getCustomMetaTagStr = ({ story, config }): string => {
  const customMetaTags = get(config, ["opts", "featureConfig", "customMetaTags"]);
  if (!customMetaTags) return "";
  return typeof customMetaTags === "function" ? customMetaTags({ story, config }) : customMetaTags;
};
