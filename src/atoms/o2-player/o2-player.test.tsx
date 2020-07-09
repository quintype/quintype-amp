import React from "react";
import { shallow, mount } from "enzyme";
import { O2Player } from "./o2-player";

const o2PlayerIds = {
  "data-pid": "59bf5a3485eb426ac28cd4e6",
  "data-bcid": "56d5f795e4b0cef03a6cce7c",
  "data-vid": "5e42d6c18c3ae829401a9ea5"
};

describe("O2Player", () => {
  it("should render o2-player element", () => {
    const wrapper = shallow(<O2Player {...o2PlayerIds} title="o2player" />);
    expect(wrapper.find("amp-o2-player").length).toBe(1);
  });
  it("should render o2-player element with default params", () => {
    const wrapper = shallow(<O2Player {...o2PlayerIds} title="o2player" />);
    expect(wrapper.find("amp-o2-player").prop("width")).toBe("16");
    expect(wrapper.find("amp-o2-player").prop("height")).toBe("9");
    expect(wrapper.find("amp-o2-player").prop("layout")).toBe("responsive");
  });
  it("should render o2-player element with custom params", () => {
    const wrapper = shallow(<O2Player {...o2PlayerIds} width="250" height="250" layout="fixed" title="o2player" />);
    expect(wrapper.find("amp-o2-player").prop("width")).toBe("250");
    expect(wrapper.find("amp-o2-player").prop("layout")).toBe("fixed");
  });
  it("should render custom styles", () => {
    const wrapper = mount(<O2Player {...o2PlayerIds} inlineStyles={{ border: "5px solid red" }} title="o2player" />);
    expect(wrapper.find("div").prop("style")).toStrictEqual({ border: "5px solid red" });
  });
});
