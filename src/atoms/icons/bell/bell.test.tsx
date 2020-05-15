import React from "react";
import { Bell } from "./bell";
import { shallow } from "enzyme";

describe("Bell Icon", () => {
  it("should render", () => {
    const wrapper = shallow(<Bell />);
    expect(wrapper).toMatchSnapshot();
  });
});
