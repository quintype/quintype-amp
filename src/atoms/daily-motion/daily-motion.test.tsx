import React from "react";
import { DailyMotion, StyledDailyMotion } from "./daily-motion";
import { shallow } from "enzyme";

const videoID = "x7t9n13";
describe("Daily Motion", () => {
  it("should render ", () => {
    const wrapper = shallow(<DailyMotion data-videoid={videoID} />);
    expect(wrapper.find("amp-dailymotion").length).toBe(1);
  });
  it("should render daily motion element with default params", () => {
    const wrapper = shallow(<DailyMotion data-videoid={videoID} />);
    expect(wrapper.find("amp-dailymotion").prop("width")).toBe("16");
    expect(wrapper.find("amp-dailymotion").prop("height")).toBe("9");
    expect(wrapper.find("amp-dailymotion").prop("layout")).toBe("responsive");
  });
  it("should render dailymotion element with custom params", () => {
    const wrapper = shallow(<DailyMotion data-videoid={videoID} width="250" height="250" layout="fixed" />);
    expect(wrapper.find("amp-dailymotion").prop("width")).toBe("250");
    expect(wrapper.find("amp-dailymotion").prop("height")).toBe("250");
    expect(wrapper.find("amp-dailymotion").prop("layout")).toBe("fixed");
  });
  it("should render dailymotion video auto play", () => {
    const wrapper = shallow(<DailyMotion data-videoid={videoID} autoplay={true} />);
    expect(wrapper.find("amp-dailymotion").prop("autoplay")).toBe(true);
  });
  it("should render dailymotion element with custom styles", () => {
    const wrapper = shallow(<StyledDailyMotion inlineStyles={{ "border-radius": "50%" }}></StyledDailyMotion>);
    expect(wrapper.find("div").prop("style")).toStrictEqual({ "border-radius": "50%" });
  });
});
