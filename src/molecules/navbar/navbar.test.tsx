import React from "react";
import { Navbar } from "./navbar";
import { shallow } from "enzyme";

describe("PublisherLogoHeader", () => {
  it("should render", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
