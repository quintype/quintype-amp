import { getSrcAndSrcset } from "./image-helpers";

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

test("getSrcsetAttrs should return correct srcset", () => {
  const { srcset } = getSrcAndSrcset(dummyProps);
  expect(srcset).toBe(
    "https://gumlet.assettype.com/%2Ffoo%2Fbar%2Fimage.jpeg?auto=format%2Ccompress&w=480 480w,https://gumlet.assettype.com/%2Ffoo%2Fbar%2Fimage.jpeg?auto=format%2Ccompress&w=960 960w,https://gumlet.assettype.com/%2Ffoo%2Fbar%2Fimage.jpeg?auto=format%2Ccompress&w=1200 1200w"
  );
});
