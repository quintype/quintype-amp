import { focusedImagePath, getImgSrcAndSrcset } from "./image-helpers";

const dummyProps = {
  opts: {
    lorem: "ipsum"
  },
  imageSlug: "foo/bar/image.png",
  metadata: {
    width: 1528,
    height: 3480,
    "focus-point": [743, 3116]
  },
  aspectRatio: ["1528", "3480"],
  cdnImage: "thumbor-stg.assettype.com"
};

test("getImgSrcAndSrcset helper", () => {
  const { src, srcset } = getImgSrcAndSrcset(dummyProps);
  expect(src).toBe("https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&lorem=ipsum");
  expect(srcset).toBe(
    "https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&lorem=ipsum&w=480 480w, https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&lorem=ipsum&w=960 960w, https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&lorem=ipsum&w=1200 1200w, https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&lorem=ipsum&w=2048 2048w"
  );
});

test("focusedImagePath helper", () => {
  const pathWithWidth = focusedImagePath({ width: "1234", ...dummyProps });
  const pathWithoutWidth = focusedImagePath(dummyProps);
  expect(pathWithWidth).toBe(
    "https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&w=1234&lorem=ipsum"
  );
  expect(pathWithoutWidth).toBe(
    "https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&lorem=ipsum"
  );
});
