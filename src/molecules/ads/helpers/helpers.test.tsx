import { getAdPropsFromConfig } from "./index";

const dummyConfig = {
  publisherConfig: {},
  ampConfig: {
    menu: { enabled: false },
    ads: {
      "bottom-sticky-ad": {
        width: "320",
        height: "50",
        type: "doubleclick",
        "data-slot": "/35096353/amptesting/formats/sticky"
      },
      "top-ad": {
        type: "industrybrains",
        width: 300,
        height: 250,
        "data-width": "300",
        "data-height": "250",
        "data-cid": "19626-3798936394"
      }
    },
    "google-client-id-api": false
  }
};

test("getAdPropsFromConfig should return correct props for a given ad from config", () => {
  const value = getAdPropsFromConfig({ config: dummyConfig, adName: "top-ad" });
  const expectedValue = {
    type: "industrybrains",
    width: 300,
    height: 250,
    "data-width": "300",
    "data-height": "250",
    "data-cid": "19626-3798936394"
  };
  expect(value).toEqual(expectedValue);
});
test("getAdPropsFromConfig should return null if given adName is not found in config", () => {
  const value = getAdPropsFromConfig({ config: dummyConfig, adName: "non-existant-ad" });
  expect(value).toBe(null);
});
