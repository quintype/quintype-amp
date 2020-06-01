import quintypeJs from "quintype-js";

export const focusedImagePath = ({ opts, slug, metadata, imgAspectRatio, cdnName }) => {
  let auto = ["format"];
  const supportsCompression = !/\.gif/.test(slug);
  if (supportsCompression) auto = auto.concat(["compress"]);
  opts = Object.assign({ auto, w: "1000" }, opts);
  const path = new quintypeJs.FocusedImage(slug, metadata).path(imgAspectRatio, opts);
  return `${cdnName}/${path}`;
};
