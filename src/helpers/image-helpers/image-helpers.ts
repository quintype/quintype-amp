import quintypeJs from "quintype-js";

export const focusedImagePath = ({ opts, slug, metadata, imgAspectRatio, cdnImage, width = "1200" }) => {
  let auto = ["format"];
  const supportsCompression = !/\.gif/.test(slug);
  if (supportsCompression) auto = auto.concat(["compress"]);
  opts = Object.assign({ auto, w: width }, opts);
  const path = new quintypeJs.FocusedImage(slug, metadata).path(imgAspectRatio, opts);
  const hostWithProtocol = /^https:\/\//.test(cdnImage) ? cdnImage : `https://${cdnImage}`;
  return `${hostWithProtocol}/${path}`;
};
