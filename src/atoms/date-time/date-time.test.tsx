import React from "react";
import { DateTime } from "./date-time";
import { shallow } from "enzyme";

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
    expect(wrapper.text()).toBe("Published: 14 June 2017");
  });
});
