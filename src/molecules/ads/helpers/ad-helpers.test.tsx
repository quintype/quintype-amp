import { getAdPropsFromConfig } from "./index";

const dummyConfig = {
  publisherConfig: {},
  ampConfig: {
    menu: { enabled: false },
    doubleclick: {
      "top-ad": {
        width: 300,
        height: 250,
        "unit-path": "/60988533/AMP_Top"
      },
      "body-ad": {
        width: 300,
        height: 250,
        "unit-path": "/60988533/AMP_Body"
      },
      "bottom-ad": {
        width: 300,
        height: 250,
        "unit-path": "/60988533/AMP_Bottom"
      }
    },
    "google-client-id-api": false
  }
};

test("getAdPropsFromConfig should return correct props for a given ad from config", () => {
  const value = getAdPropsFromConfig({ config: dummyConfig, adName: "body-ad" });
  const expectedValue = {
    width: 300,
    height: 250,
    "unit-path": "/60988533/AMP_Body"
  };
  expect(value).toEqual(expectedValue);
});
test("getAdPropsFromConfig should return null if given adName is not found in config", () => {
  const value = getAdPropsFromConfig({ config: dummyConfig, adName: "non-existant-ad" });
  expect(value).toBe(null);
});
