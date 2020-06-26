import { Theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { shallow } from "enzyme";
import { getTokensFromAMPConfig } from "../../utils/theme";
import { ampConfig } from "../../__fixtures__";
import cloneDeep from "lodash.clonedeep";
import React from "react";
import tokens from "./tokens";

const clone1 = cloneDeep(ampConfig);
delete clone1.fonts;
delete clone1.colors;

const dummyAmpConfig = {
  ...clone1,
  fonts: {
    secondary: {
      url: "Merriweather:300,400,700",
      family: '"Merriweather", serif'
    }
  },
  colors: {
    primary: "#43DBC0",
    secondary: "#E1306C",
    "header-background": "#E5E6E8"
  }
};
const tokensFromConfig = getTokensFromAMPConfig(dummyAmpConfig);

const expected = cloneDeep(tokens);
expected.color.primaryColor = "#43DBC0";
expected.color.secondaryColor = "#E1306C";
expected.color.headerBackground = "#E5E6E8";
expected.font.family.secondary = `"Merriweather", serif`;

describe("Theme context provider", () => {
  it("should merge theme tokens from config with default tokens and pass them to theme provider", () => {
    const wrapper = shallow(
      <Theme tokens={tokensFromConfig}>
        <div>Foo</div>
      </Theme>
    );
    expect(wrapper.find(ThemeProvider).prop("theme")).toMatchObject(expected);
  });
});
