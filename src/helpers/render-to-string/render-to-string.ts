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
    const { htmlStr, styles } = getHtmlAndStyles(component);
    const { title, script, customStyles } = getHeadTags(component);

    str += `${headStart}\n`;
    str += `${title}\n`;
    str += `${script}\n`;
    str += `${customStyles || styles}\n`;
    str += `${headEndBodyStart}\n`;
    str += `${htmlStr}\n`;
    str += `${bodyEnd}`;
    return str;
  } catch (e) {
    return e;
  }
}

const removeEmptyStyleTag = (str: string) => str.replace(/<style amp-custom><\/style>/, "");

const getHeadTags = (component) => {
  // returns all the stuff that react-helmet generates to be put in the head.
  // custom styles will come here as helmet collects them
  ReactDOMServer.renderToStaticMarkup(component); // without this, helmet.script returns empty
  const helmet = Helmet.renderStatic();
  const title = helmet.title.toString();
  const script = helmet.script.toString();
  // customStyles will give styles added directly inside <Helmet>. This Will be removed soon as all styles are now applied using styled components. Keeping it here for historic reasons
  let customStyles = helmet.style.toString().replace(/^<style[^>]*>/, `<style amp-custom>`);
  customStyles = removeEmptyStyleTag(customStyles);
  return { title, script, customStyles };
};

const getHtmlAndStyles = (component: ReactElement) => {
  const sheet = new ServerStyleSheet();
  const htmlStr = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(component));
  let styles = sheet.getStyleTags();
  styles = styles.replace(/^<style[^>]*/, `<style amp-custom`);
  styles = styles.replace(/data-styled[^}]*}/g, "");
  styles = removeEmptyStyleTag(styles);
  sheet.seal();
  return { htmlStr, styles };
};

const headStart = `<!doctype html>
<html ⚡ lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta name="description" content="This is the AMP Boilerplate.">
    <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <link rel="canonical" href=".">`;
const headEndBodyStart = `</head>\n<body>`;
const bodyEnd = `</body>\n</html>`;
