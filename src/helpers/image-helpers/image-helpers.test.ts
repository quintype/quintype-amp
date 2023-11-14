import { focusedImagePath, getImgSrcAndSrcset } from "./image-helpers";

const dummyProps = {
  opts: {
    lorem: "ipsum"
  },
  slug: "foo/bar/image.png",
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
    "https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&lorem=ipsum&w=640 640w"
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

const dummyPropsWithoutMetadata = {
  ...dummyProps,
  metadata: null
};

test("focusedImagePath helper", () => {
  const pathWithoutWidth = focusedImagePath(dummyPropsWithoutMetadata);
  expect(pathWithoutWidth).toBe("https://thumbor-stg.assettype.com/foo/bar/image.png");
});

test("getImgSrcAndSrcset helper", () => {
  const { src, srcset } = getImgSrcAndSrcset(dummyPropsWithoutMetadata);
  expect(src).toBe("https://thumbor-stg.assettype.com/foo/bar/image.png");
  expect(srcset).toBe("https://thumbor-stg.assettype.com/foo/bar/image.png 640w");
});
