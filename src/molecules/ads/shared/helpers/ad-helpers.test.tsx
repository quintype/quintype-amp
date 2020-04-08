import { getPropsForDfpAd } from "./index";

const dummyConfig = {
  publisherConfig: {},
  ampConfig: {
    menu: { enabled: false },
    doubleclick: {
      "top-ad": {
        width: 300,
        height: 250
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

test("getPropsForDfpAd should return correct props for a given ad from config", () => {
  const value = getPropsForDfpAd({ overridingProps: {}, config: dummyConfig, adName: "body-ad" });
  const expectedValue = {
    width: 300,
    height: 250,
    "data-slot": "/60988533/AMP_Body"
  };
  expect(value).toMatchObject(expectedValue);
});
test("getPropsForDfpAd should return overriding props if they exist", () => {
  const value = getPropsForDfpAd({
    overridingProps: { foo: "bar", lorem: "ipsum" },
    config: dummyConfig,
    adName: "some-ad"
  });
  const expectedValue = { foo: "bar", lorem: "ipsum" };
  expect(value).toMatchObject(expectedValue);
});
test("getPropsForDfpAd should throw error if unit-path is undefined for an ad in config", () => {
  expect(() => {
    getPropsForDfpAd({ overridingProps: {}, config: dummyConfig, adName: "top-ad" });
  }).toThrowError(new Error("unit-path not defined for ad top-ad in config"));
});
test("getPropsForDfpAd should throw error if overriding are not passed and ad props are not defined in config", () => {
  expect(() => {
    getPropsForDfpAd({ overridingProps: {}, config: dummyConfig, adName: "non-existant-ad" });
  }).toThrowError(new Error("No props defined for non-existant-ad in config"));
});
test("getPropsForDfpAd gives priority to overriding props over the props defined in config", () => {
  const value = getPropsForDfpAd({
    overridingProps: { foo: 1, bar: "two", baz: "$upreeth" },
    config: dummyConfig,
    adName: "bottom-ad"
  });
  const expectedValue = {
    foo: 1,
    bar: "two",
    baz: "$upreeth"
  };
  expect(value).toMatchObject(expectedValue);
});
