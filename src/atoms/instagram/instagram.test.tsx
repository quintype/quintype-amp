import React from "react";
import { shallow } from "enzyme";
import { StyledInstagram, Instagram } from "./instagram";

const instagramPostID = "B_DfYSRJiAf";

describe("Instagram", () => {
  it("should render instagram element", () => {
    const wrapper = shallow(<Instagram data-shortcode={instagramPostID} />);
    expect(wrapper.find("amp-instagram").length).toBe(1);
  });
  it("should render instagram element with default params", () => {
    const wrapper = shallow(<Instagram data-shortcode={instagramPostID} />);
    expect(wrapper.find("amp-instagram").prop("width")).toBe("16");
    expect(wrapper.find("amp-instagram").prop("height")).toBe("9");
    expect(wrapper.find("amp-instagram").prop("layout")).toBe("responsive");
  });
  it("should render instagram element with custom params", () => {
    const wrapper = shallow(<Instagram data-shortcode={instagramPostID} width="250" height="250" layout="fixed" />);
    expect(wrapper.find("amp-instagram").prop("width")).toBe("250");
    expect(wrapper.find("amp-instagram").prop("layout")).toBe("fixed");
  });
  it("should render instagram element with caption", () => {
    const wrapper = shallow(<Instagram data-shortcode={instagramPostID} data-captioned={true} />);
    expect(wrapper.find("amp-instagram").prop("data-captioned")).toBe(true);
  });
  it("should render custom styles", () => {
    const wrapper = shallow(<StyledInstagram inlineStyles={{ border: "5px solid red" }} />);
    expect(wrapper.find("div").prop("style")).toStrictEqual({ border: "5px solid red" });
  });
});
