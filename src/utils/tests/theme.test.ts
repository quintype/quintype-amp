import { getTokensFromAMPConfig, getTokensForDarkTheme } from "../theme";
import { ampConfig, config } from "../../__fixtures__";

const modifiedAmpConfig = ampConfig;
modifiedAmpConfig.colors = {
  primary: "#123456",
  "header-background": "#010203"
};
modifiedAmpConfig.fonts = {
  primary: {
    url: "primaryFontUrl",
    family: "primaryFontFamily"
  },
  secondary: {
    url: "secondaryFontUrl",
    family: "secondaryFontFamily"
  }
};

test("getTokensFromAMPConfig helper", () => {
  const expected = {
    color: { headerBackground: "#010203", primaryColor: "#123456" },
    font: { family: { primary: "primaryFontFamily", secondary: "secondaryFontFamily" } }
  };
  expect(getTokensFromAMPConfig(modifiedAmpConfig)).toMatchObject(expected);
});

test("getTokensForDarkTheme helper", () => {
  const modifiedConfig = config;
  modifiedConfig.ampConfig = modifiedAmpConfig;
  const expected = {
    color: {
      // can safely hardcode these values in test because they are anyway being hardcoded in tokens.ts
      headerBackground: "#010203",
      mono1: "#060606",
      mono2: "#161616",
      mono3: "#2e2e2e",
      mono4: "#868686",
      mono5: "#9c9c9c",
      mono6: "#cccccc",
      mono7: "#f2f2f2",
      primaryColor: "#123456"
    },
    font: { family: { primary: "primaryFontFamily", secondary: "secondaryFontFamily" } }
  };

  const tokens = getTokensForDarkTheme(modifiedConfig);
  expect(tokens).toMatchObject(expected);
});
