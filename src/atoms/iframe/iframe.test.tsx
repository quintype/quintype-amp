import React from "react";
import { shallow } from "enzyme";
import { StyledIframe, Iframe } from "./Iframe";

const postSrc = "https://codepen.io/rvgpl/embed/qXGqKm?height=265&theme-id=dark&default-tab=css,result";

describe("Iframe", () => {
  it("should render Iframe", () => {
    const wrapper = shallow(<Iframe src={postSrc} />);
    expect(wrapper.find("amp-iframe").length).toBe(1);
  });
  it("should render iframe with default params", () => {
    const wrapper = shallow(<Iframe src={postSrc} />);
    expect(wrapper.find("amp-iframe").prop("width")).toBe("16");
    expect(wrapper.find("amp-iframe").prop("height")).toBe("9");
    expect(wrapper.find("amp-iframe").prop("layout")).toBe("responsive");
  });
  it("should render iframe with custom params", () => {
    const wrapper = shallow(<Iframe src={postSrc} width="250" height="250" layout="fixed" />);
    expect(wrapper.find("amp-iframe").prop("width")).toBe("250");
    expect(wrapper.find("amp-iframe").prop("layout")).toBe("fixed");
  });
  it("should render Iframe with custom styles", () => {
    const wrapper = shallow(<StyledIframe inlineStyles={{ border: "5px solid red" }}></StyledIframe>);
    expect(wrapper.find("div").prop("style")).toStrictEqual({ border: "5px solid red" });
  });
});
