import React from "react";
import { DateFirstPublishedBase } from "./date-first-published";
import { shallow, mount } from "enzyme";
import { DateTime } from "../../../atoms";
import { config } from "../../../__fixtures__";
import { ThemeProvider } from "styled-components";
import defaultTokens from "../../../context/theme/tokens";
import { getDummyStory } from "./date-last-published.test";

describe("DateFirstPublished", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<DateFirstPublishedBase story={getDummyStory()} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should pass date in default format to <DateTime />", () => {
    const wrapper = mount(
      <ThemeProvider theme={defaultTokens}>
        <DateFirstPublishedBase story={getDummyStory()} />
      </ThemeProvider>
    );
    expect(wrapper.find(DateTime).prop("formattedDate")).toBe("12th Feb, 2020 at 4:07 PM");
  });
  it("should pass date in custom format to <DateTime />", () => {
    const wrapper = mount(
      <ThemeProvider theme={defaultTokens}>
        <DateFirstPublishedBase story={getDummyStory()} format="dd MM yyyy" />
      </ThemeProvider>
    );
    expect(wrapper.find(DateTime).prop("formattedDate")).toBe("12 02 2020");
  });
  it("should pass prepend to <DateTime />", () => {
    const wrapper = mount(
      <ThemeProvider theme={defaultTokens}>
        <DateFirstPublishedBase story={getDummyStory()} prepend="lorem ipsum" />
      </ThemeProvider>
    );
    expect(wrapper.find(DateTime).prop("prepend")).toBe("lorem ipsum");
  });
  it("should pass localized formattedDate to <DateTime />", () => {
    const wrapper = mount(
      <ThemeProvider theme={defaultTokens}>
        <DateFirstPublishedBase story={getDummyStory()} config={config} />
      </ThemeProvider>
    );
    expect(wrapper.find(DateTime).prop("formattedDate")).toBe("February 12, 2020, 4:07 PM");
  });
});
