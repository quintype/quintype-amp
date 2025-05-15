import { FocusedImage } from "quintype-js";
import { HeroImageMetadata, Story } from "../../types/story";

export const getImgSrcAndSrcset = ({ opts, slug, metadata, aspectRatio, cdnImage }: GetImgSrcAndSrcsetTypes) => {
  const isGumlet = cdnImage.includes("gumlet");
  const imgOpts = isGumlet ? { format: "auto", ...opts } : opts;
  const src = focusedImagePath({ opts: imgOpts, slug, metadata, aspectRatio, cdnImage });
  let srcset = "";
  const srcsetOpts = [
    { ...imgOpts, w: 360 },
    { ...imgOpts, w: 404 }
  ];
  srcsetOpts.forEach((val, i) => {
    if (i === srcsetOpts.length - 1) {
      srcset += `${focusedImagePath({ opts: val, slug, metadata, aspectRatio, cdnImage })} ${val.w}w`;
    } else {
      srcset += `${focusedImagePath({ opts: val, slug, metadata, aspectRatio, cdnImage })} ${val.w}w, `;
    }
  });
  return { src, srcset };
};

export const focusedImagePath = ({ opts, slug, metadata, aspectRatio, cdnImage, width }: FocusedImagePathTypes) => {
  const imgAspectRatio: number[] = aspectRatio.map((el) => Number(el));
  const newOpts = width ? Object.assign({ w: width }, opts) : opts;
  const path = metadata ? new FocusedImage(slug, metadata).path(imgAspectRatio, newOpts) : `${slug}`;
  const hostWithProtocol = cdnImage.startsWith("https://") ? cdnImage : `https://${cdnImage}`;
  return `${hostWithProtocol}/${path}`;
};

interface FocusedImagePathTypes {
  slug: string;
  aspectRatio: string[];
  cdnImage: string;
  metadata: HeroImageMetadata | null;
  opts?: object;
  width?: string;
}
interface GetImgSrcAndSrcsetTypes {
  slug: string;
  aspectRatio: string[];
  cdnImage: string;
  metadata: HeroImageMetadata | null;
  opts?: object;
  story?: Story;
}
