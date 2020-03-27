import React from "react";
import { DateTime } from "./date-time";
import { shallow } from "enzyme";
import { textStory } from "../../__fixtures__";

describe("DateTime", () => {
  it("should render date", () => {
    const wrapper = shallow(<DateTime dateTime={textStory["last-published-at"]} />);
    expect(wrapper.text()).toBe("12th Feb, 2020");
  });
  it("should render date and time", () => {
    const wrapper = shallow(<DateTime dateTime={textStory["last-published-at"]} showTime={true} />);
    expect(wrapper.text()).toBe("12th Feb, 2020 at 4:07 PM");
  });
  it("should render date with custom format", () => {
    const wrapper = shallow(<DateTime dateTime={textStory["last-published-at"]} formatString="dd MMMM yyyy" />);
    expect(wrapper.text()).toBe("12 February 2020");
  });
});
