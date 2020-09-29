import quintypeJs from "quintype-js";
import { HeroImageMetadata } from "../../types/story";

export const focusedImagePath = ({
  opts,
  slug,
  metadata,
  imgAspectRatio,
  cdnImage,
  width = "1200"
}: FocusedImagePathTypes) => {
  let auto = ["format"];
  const supportsCompression = !/\.gif/.test(slug);
  if (supportsCompression) auto = auto.concat(["compress"]);
  opts = Object.assign({ auto, w: width }, opts);
  const path = new quintypeJs.FocusedImage(slug, metadata).path(imgAspectRatio, opts);
  const hostWithProtocol = /^https:\/\//.test(cdnImage) ? cdnImage : `https://${cdnImage}`;
  return `${hostWithProtocol}/${path}`;
};

interface FocusedImagePathTypes {
  slug: string;
  metadata: HeroImageMetadata;
  imgAspectRatio: number[];
  cdnImage: string;
  opts?: object;
  width?: string;
}
