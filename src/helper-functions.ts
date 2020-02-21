import { Helmet } from "react-helmet";
import { ReactElement } from "react";
import { ServerStyleSheet } from "styled-components";
import ReactDOMServer from "react-dom/server";

const removeEmptyStyleTag = (str: string) => str.replace(/<style amp-custom><\/style>/, "");

export const getHeadTags = () => {
  // returns all the stuff that react-helmet generates to be put in the head.
  // custom styles will come here as helmet collects them

  const helmet = Helmet.renderStatic();
  const title = helmet.title.toString();
  const script = helmet.script.toString();
  let customStyles = helmet.style.toString().replace(/^<style[^>]*>/, `<style amp-custom>`);
  customStyles = removeEmptyStyleTag(customStyles);
  return { title, script, customStyles };
};

export const getHtmlAndDefaultStyles = (component: ReactElement) => {
  const sheet = new ServerStyleSheet();
  const htmlStr = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(component));
  let defaultStyles = sheet.getStyleTags();
  defaultStyles = defaultStyles.replace(/^<style[^>]*/, `<style amp-custom`);
  defaultStyles = defaultStyles.replace(/data-styled[^}]*}/g, "");
  defaultStyles = removeEmptyStyleTag(defaultStyles);
  sheet.seal();
  return { htmlStr, defaultStyles };
};
