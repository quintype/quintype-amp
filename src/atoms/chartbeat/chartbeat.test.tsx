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
  },
  publisherConfig: {
    "sketches-host": "https://www.vikatan.com"
  }
};
const noChartbeat = {
  ampConfig: {}
};
const chartbeatWithoutUid = {
  ampConfig: {
    chartbeat: {
      uid: "",
      domain: "vikatan.com"
    }
  },
  publisherConfig: {
    "sketches-host": "vikatan.com"
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
  it("shouldn't render if chartbeat config isn't present in ampconfig", () => {
    const wrapper = shallow(<ChartBeatBase story={textStory} config={noChartbeat} />);
    expect(wrapper.find(Analytics).length).toBe(0);
  });
  it("shouldn't render if chartbeat UID is empty in ampconfig", () => {
    const wrapper = shallow(<ChartBeatBase story={textStory} config={chartbeatWithoutUid} />);
    expect(wrapper.find(Analytics).length).toBe(0);
  });
});
