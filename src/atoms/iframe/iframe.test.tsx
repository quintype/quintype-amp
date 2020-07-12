import React from "react";
import { shallow } from "enzyme";
import { Iframe } from "./Iframe";

const postSrc = "https://codepen.io/rvgpl/embed/qXGqKm?height=265&theme-id=dark&default-tab=css,result";
const title = "code pen embed";
describe("Iframe", () => {
  it("should render Iframe", () => {
    const wrapper = shallow(<Iframe src={postSrc} title={title} />);
    expect(wrapper.find("amp-iframe").length).toBe(1);
  });
  it("should render iframe with default params", () => {
    const wrapper = shallow(<Iframe src={postSrc} title={title} />);
    expect(wrapper.find("amp-iframe").prop("width")).toBe("16");
    expect(wrapper.find("amp-iframe").prop("height")).toBe("9");
    expect(wrapper.find("amp-iframe").prop("layout")).toBe("responsive");
  });
  it("should render iframe with custom params", () => {
    const wrapper = shallow(<Iframe src={postSrc} width="250" height="250" layout="fixed" title={title} />);
    expect(wrapper.find("amp-iframe").prop("width")).toBe("250");
    expect(wrapper.find("amp-iframe").prop("layout")).toBe("fixed");
  });
});
