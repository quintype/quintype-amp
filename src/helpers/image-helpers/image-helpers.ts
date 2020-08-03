import quintypeJs from "quintype-js";

const focusedImagePath = ({ opts, slug, metadata, imgAspectRatio, cdnImage, width = "1200" }) => {
  let auto = ["format"];
  const supportsCompression = !/\.gif/.test(slug);
  if (supportsCompression) auto = auto.concat(["compress"]);
  opts = Object.assign({ auto, w: width }, opts);
  const path = new quintypeJs.FocusedImage(slug, metadata).path(imgAspectRatio, opts);
  const hostWithProtocol = /^https:\/\//.test(cdnImage) ? cdnImage : `https://${cdnImage}`;
  return `${hostWithProtocol}/${path}`;
};

export const getSrcAndSrcset = ({ opts, slug, metadata, imgAspectRatio, cdnImage }) => {
  const widths: number[] = [480, 960, 1200];
  const srcset: string[] = [];

  widths.forEach((width) => {
    const path = focusedImagePath({ opts, slug, metadata, imgAspectRatio, cdnImage, width: width.toString() });
    srcset.push(`${path} ${width}w`);
  });
  return { src: focusedImagePath({ opts, slug, metadata, imgAspectRatio, cdnImage }), srcset: srcset.join(",") };
};
