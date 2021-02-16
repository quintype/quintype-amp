import { infiniteScrollExists } from "./index";
import { config } from "../../__fixtures__/config.fixture";

const configWithInfiniteScroll = { ...config };
configWithInfiniteScroll.opts = {
  featureConfig: {
    infiniteScroll: {
      infiniteScrollInlineConfig: `[{\"image\":\"https://foo.com/puppies.jpg\",\"title\":\"Puppies Page\",\"url\":\"/puppies\"}]`
    }
  }
};

const configWithoutInfiniteScroll = { ...config };
configWithoutInfiniteScroll.opts = {};

test("infiniteScrollExists helper", () => {
  expect(infiniteScrollExists(configWithInfiniteScroll)).toBe(true);
  expect(infiniteScrollExists(configWithoutInfiniteScroll)).toBe(false);
});
