import React from "react";
import { Close } from "./close";
import { shallow } from "enzyme";

describe("Close Icon", () => {
  it("should render", () => {
    const wrapper = shallow(<Close />);
    expect(wrapper).toMatchSnapshot();
  });
});
