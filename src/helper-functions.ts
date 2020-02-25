import { Helmet } from "react-helmet";
import { ReactElement } from "react";
import { ServerStyleSheet } from "styled-components";
import ReactDOMServer from "react-dom/server";
import quintypeJs from "quintype-js";

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

export const focusedImagePath = ({ opts, slug, metadata, aspectRatio, cdn_image }) => {
  let auto = ["format"];
  const supportsCompression = !/\.gif/.test(slug);
  if (supportsCompression) auto = auto.concat(["compress"]);
  opts = Object.assign({ auto }, opts);
  const path = new quintypeJs.FocusedImage(slug, metadata).path(aspectRatio, opts);
  const stripProtocol = (url: string) => url.replace(/^(http|https):/, "");
  return `${stripProtocol(cdn_image)}/${path}`;
};

export const calculateImgHeight = (aspectRatio, width) => {
  const ar = aspectRatio[0] / aspectRatio[1];
  return Math.round(width / ar).toString();
};
