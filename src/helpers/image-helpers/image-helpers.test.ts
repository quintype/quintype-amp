import { focusedImagePath, getImgSrcAndSrcset, isGumlet } from "./image-helpers";

const dummyProps = {
  opts: {
    enlarge: "true"
  },
  srcSetOpts: {
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
  expect(src).toBe("https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&enlarge=true");
  expect(srcset).toBe(
    "https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&w=640&lorem=ipsum 1x, https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&w=1200&lorem=ipsum 2x, https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&w=2400&lorem=ipsum 4x"
  );
});
test("getImgSrcAndSrcset helper with skipSrcset true", () => {
  const { src, srcset } = getImgSrcAndSrcset({ skipSrcset: true, ...dummyProps });
  expect(src).toBe("https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&enlarge=true");
  expect(srcset).toBeNull();
});

test("focusedImagePath helper", () => {
  const pathWithWidth = focusedImagePath({ width: "1234", ...dummyProps });
  const pathWithoutWidth = focusedImagePath(dummyProps);
  expect(pathWithWidth).toBe(
    "https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&w=1234&enlarge=true"
  );
  expect(pathWithoutWidth).toBe(
    "https://thumbor-stg.assettype.com/foo%2Fbar%2Fimage.png?rect=0%2C0%2C1528%2C3480&enlarge=true"
  );
});

test("isGumlet helper", () => {
  const dummyGumletConfig = {
    publisherConfig: {
      "cdn-image": "gumlet.assettype.com"
    }
  };
  const dummyNonGumletConfig = {
    publisherConfig: {
      "cdn-image": "thumbor-stg.assettype.com"
    }
  };
  expect(isGumlet(dummyGumletConfig)).toBe(true);
  expect(isGumlet(dummyNonGumletConfig)).toBe(false);
});
