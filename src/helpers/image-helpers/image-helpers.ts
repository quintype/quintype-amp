import { FocusedImage } from "quintype-js";
import { HeroImageMetadata } from "../../types/story";

export const getImgSrcAndSrcset = ({ opts, imageSlug, metadata, aspectRatio, cdnImage }: GetImgSrcAndSrcsetTypes) => {
  const isGumlet = cdnImage.includes("gumlet");
  const imgOpts = isGumlet ? { format: "auto", ...opts } : opts;
  const src = focusedImagePath({ opts: imgOpts, imageSlug, metadata, aspectRatio, cdnImage });
  let srcset = "";
  const srcsetOpts = [
    { ...imgOpts, w: 480 },
    { ...imgOpts, w: 960 },
    { ...imgOpts, w: 1200 },
    { ...imgOpts, w: 2048 }
  ];
  srcsetOpts.forEach((val, i) => {
    if (i === srcsetOpts.length - 1) {
      srcset += `${focusedImagePath({ opts: val, imageSlug, metadata, aspectRatio, cdnImage })} ${val.w}w`;
    } else {
      srcset += `${focusedImagePath({ opts: val, imageSlug, metadata, aspectRatio, cdnImage })} ${val.w}w, `;
    }
  });
  return { src, srcset };
};

export const focusedImagePath = ({
  opts,
  imageSlug,
  metadata,
  aspectRatio,
  cdnImage,
  width
}: FocusedImagePathTypes) => {
  const imgAspectRatio: number[] = aspectRatio.map((el) => Number(el));
  const newOpts = width ? Object.assign({ w: width }, opts) : opts;
  const path = metadata ? new FocusedImage(imageSlug, metadata).path(imgAspectRatio, newOpts) : `${imageSlug}`;
  const hostWithProtocol = cdnImage.startsWith("https://") ? cdnImage : `https://${cdnImage}`;
  return `${hostWithProtocol}/${path}`;
};

interface FocusedImagePathTypes {
  imageSlug: string;
  aspectRatio: string[];
  cdnImage: string;
  metadata: HeroImageMetadata | null;
  opts?: object;
  width?: string;
}
interface GetImgSrcAndSrcsetTypes {
  imageSlug: string;
  aspectRatio: string[];
  cdnImage: string;
  metadata: HeroImageMetadata | null;
  opts?: object;
}
