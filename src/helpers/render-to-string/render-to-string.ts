import { Helmet } from "react-helmet";
import { ReactElement } from "react";
import { ServerStyleSheet } from "styled-components";
import ReactDOMServer from "react-dom/server";

/**
 * The ampifyStory function is used behind the scenes by `quintype/framework`
 * It picks the correct story template and passes on control to <a href="global.html#renderToString">renderToString</a>
 *
 * @category Helper
 * @module AmpifyStory
 * @function ampifyStory
 * @param {Object} params [mandatory] object containing parameters
 * @param {Object} params.story [mandatory] story object
 * @param {Object} params.publisherConfig [mandatory] the publisher config - same as "/api/v1/config"
 * @param {Object} params.ampConfig [mandatory] AMP specific config coming from platform - same as "/api/v1/amp/config"
 * @param {String} params.seo ready to use SEO string that can be put in the document head
 * @param {Object} params.opts opts object containing customizations and configs
 * @returns {function} the renderToString function
 */

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
 * @returns {string} ready to render amp html
 */
export function renderToString({ template, seo, langTag }) {
  let str = "";
  try {
    const { title, script, customStyles, link, metaTags } = getHeadTagsFromHelmet(template);
    const { htmlStr, styles } = getHtmlAndStyledComponentsStyles(template);
    const seoStr = `${metaTags}${link}${seo}`;
    str += getHeadStartStr(langTag);
    str += `${seoStr}`;
    str += `${script}`;
    str += `<style amp-custom>${customStyles}${styles}</style>`;
    str += `${ampBoilerplate}`;
    str += `${title}`;
    str += `${headEndBodyStart}`;
    str += `${htmlStr}`;
    str += `${bodyEnd}`;
    return str;
  } catch (e) {
    return e;
  }
}

const stripStyleTag = (str: string) => str.replace(/<style[^>]*>|<\/style>/g, "");
const discardEmptyTitle = (str: string) => str.replace(/<title data-react-helmet="true"><\/title>/, "");

const getHeadTagsFromHelmet = (component) => {
  ReactDOMServer.renderToStaticMarkup(component); // without this, helmet.script returns empty
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

const getHeadStartStr = (langTag) => {
  const langTagStr = langTag ? `lang="${langTag}"` : "";
  return `<!doctype html>
  <html ${langTagStr} ⚡>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
      <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
      <script async src="https://cdn.ampproject.org/v0.js"></script>`;
};
const ampBoilerplate = `<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>`;
const headEndBodyStart = `</head><body>`;
const bodyEnd = `</body></html>`;
