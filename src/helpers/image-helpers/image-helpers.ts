import { FocusedImage } from "quintype-js";
import { HeroImageMetadata } from "../../types/story";

export const getImgSrcAndSrcset = ({ opts, encodedSlug, metadata, aspectRatio, cdnImage }: GetImgSrcAndSrcsetTypes) => {
  const isGumlet = cdnImage.includes("gumlet");
  const imgOpts = isGumlet ? { format: "auto", ...opts } : opts;
  const src = focusedImagePath({ opts: imgOpts, encodedSlug, metadata, aspectRatio, cdnImage });
  let srcset = "";
  const srcsetOpts = [
    { ...imgOpts, w: 480 },
    { ...imgOpts, w: 960 },
    { ...imgOpts, w: 1200 },
    { ...imgOpts, w: 2048 }
  ];
  srcsetOpts.forEach((val, i) => {
    if (i === srcsetOpts.length - 1) {
      srcset += `${focusedImagePath({ opts: val, encodedSlug, metadata, aspectRatio, cdnImage })} ${val.w}w`;
    } else {
      srcset += `${focusedImagePath({ opts: val, encodedSlug, metadata, aspectRatio, cdnImage })} ${val.w}w, `;
    }
  });
  return { src, srcset };
};

export const focusedImagePath = ({
  opts,
  encodedSlug,
  metadata,
  aspectRatio,
  cdnImage,
  width
}: FocusedImagePathTypes) => {
  const imgAspectRatio: number[] = aspectRatio.map((el) => Number(el));
  const newOpts = width ? Object.assign({ w: width }, opts) : opts;
  const path = metadata ? new FocusedImage(encodedSlug, metadata).path(imgAspectRatio, newOpts) : `${encodedSlug}`;
  const hostWithProtocol = cdnImage.startsWith("https://") ? cdnImage : `https://${cdnImage}`;
  return `${hostWithProtocol}/${path}`;
};

interface FocusedImagePathTypes {
  encodedSlug: string;
  aspectRatio: string[];
  cdnImage: string;
  metadata: HeroImageMetadata | null;
  opts?: object;
  width?: string;
}
interface GetImgSrcAndSrcsetTypes {
  encodedSlug: string;
  aspectRatio: string[];
  cdnImage: string;
  metadata: HeroImageMetadata | null;
  opts?: object;
}
