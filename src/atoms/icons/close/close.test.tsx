import React from "react";
import { Close } from "./close";
import { shallow } from "enzyme";

describe("PublisherLogoHeader", () => {
  it("should render", () => {
    const wrapper = shallow(<Close />);
    expect(wrapper).toMatchSnapshot();
  });
});
