import { focusedImagePath } from "./image-helpers";

const dummyProps = {
  opts: {},
  slug: "/foo/bar/image.jpeg",
  metadata: {
    width: 1200,
    height: 1200
  },
  imgAspectRatio: [4, 3],
  cdnImage: "gumlet.assettype.com"
};

test("focusedImagePath should return correct value", () => {
  const src = focusedImagePath(dummyProps);
  expect(src).toBe("https://gumlet.assettype.com/%2Ffoo%2Fbar%2Fimage.jpeg?auto=format%2Ccompress&w=1200");
});
