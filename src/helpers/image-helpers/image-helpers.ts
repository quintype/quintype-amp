import { FocusedImage } from "quintype-js";
import { HeroImageMetadata } from "../../types/story";

export const getImgSrcAndSrcset = ({ opts, slug, metadata, aspectRatio, cdnImage }: GetImgSrcAndSrcsetTypes) => {
  const isGumlet = cdnImage.includes("gumlet");
  const imgOpts = isGumlet ? { format: "auto", ...opts } : opts;
  const src = focusedImagePath({ opts: imgOpts, slug, metadata, aspectRatio, cdnImage });

  // 1x == 640 because images can be 600 css pixels wide at most as per current implementation. 640 is slightly greater than 600
  const widths = [
    { xDescriptor: "1x", width: "640" },
    { xDescriptor: "2x", width: "1200" },
    { xDescriptor: "4x", width: "2400" }
  ];
  const srcset = widths.reduce((acc, currVal, idx) => {
    const { xDescriptor, width } = currVal;
    acc += `${focusedImagePath({
      width,
      opts: imgOpts,
      slug,
      metadata,
      aspectRatio,
      cdnImage
    })} ${xDescriptor}`;
    if (idx < widths.length - 1) acc += `, `;
    return acc;
  }, "");
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
}
