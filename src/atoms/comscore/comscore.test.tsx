import React from "react";
import { ComScoreBase } from "./comscore";
import { shallow } from "enzyme";
import { Analytics } from "../analytics";

const config = {
  ampConfig: {
    "comscore-tracking-vars": {
      c1: "123",
      c2: "456"
    }
  }
};
describe("ComScore", () => {
  it("should render", () => {
    const wrapper = shallow(<ComScoreBase config={config} />);
    expect(wrapper.find(Analytics).prop("targets")).toEqual({
      vars: {
        c1: "123",
        c2: "456"
      },
      extraUrlParams: {
        comscorekw: "amp"
      }
    });
  });
  it("should render with type prop", () => {
    const wrapper = shallow(<ComScoreBase config={config} />);
    expect(wrapper.find(Analytics).prop("type")).toEqual("comscore");
  });
});
