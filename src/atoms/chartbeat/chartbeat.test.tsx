import React from "react";
import { shallow } from "enzyme";
import { ChartBeatBase } from "./chartbeat";
import { Analytics } from "../analytics";
import { textStory } from "../../__fixtures__";
const config = {
  ampConfig: {
    chartbeat: {
      uid: "61123",
      domain: "vikatan.com"
    }
  }
};
describe("ChartBeat", () => {
  it("should render", () => {
    const wrapper = shallow(<ChartBeatBase story={textStory} config={config} />);
    expect(wrapper.find(Analytics).prop("targets")).toEqual({
      vars: {
        uid: "61123",
        domain: "vikatan.com",
        useCanonical: true,
        sections: "News",
        authors: "Ravi Kanth"
      }
    });
  });
  it("should have type prop", () => {
    const wrapper = shallow(<ChartBeatBase story={textStory} config={config} />);
    expect(wrapper.find(Analytics).prop("type")).toEqual("chartbeat");
  });
});
