import React from "react";
import { DateTime } from "./date-time";
import { mount, shallow } from "enzyme";
import { Theme } from "../../context/theme";

describe("DateTime", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<DateTime formattedDate="14 June 2017" prepend="Published: " />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render", () => {
    const wrapper = shallow(<DateTime formattedDate="14 June 2017" />);
    expect(wrapper.text()).toBe("14 June 2017");
  });
  it("should prepend text", () => {
    const wrapper = shallow(<DateTime formattedDate="14 June 2017" prepend="Published: " />);
    expect(wrapper.text()).toMatch(/^Published:/);
  });
  it("should render with custom styles", () => {
    const wrapper = mount(
      <Theme>
        <DateTime formattedDate="14 June 2017" inlineStyles={{ backgroundColor: "blue" }}></DateTime>
      </Theme>
    );
    expect(wrapper.find("time").prop("style")).toStrictEqual({ backgroundColor: "blue" });
  });
});
