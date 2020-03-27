import quintypeJs from "quintype-js";

export const focusedImagePath = ({ opts, slug, metadata, aspectRatio, cdnImage }) => {
  let auto = ["format"];
  const supportsCompression = !/\.gif/.test(slug);
  if (supportsCompression) auto = auto.concat(["compress"]);
  opts = Object.assign({ auto, w: "1000" }, opts);
  const path = new quintypeJs.FocusedImage(slug, metadata).path(aspectRatio, opts);
  return `${cdnImage}/${path}`;
};

export const calculateImgHeight = (aspectRatio, width) => {
  const ar = aspectRatio[0] / aspectRatio[1];
  return Math.round(width / ar).toString();
};
