import React from "react";
import { shallow } from "enzyme";
import { DefaultHeaderCard } from "./header-card";
import { HeaderCardBase } from "./header-card";
import { textStory, config } from "../../__fixtures__";

describe("Header Card", () => {
  it("should render Default header card component", () => {
    const wrapper = shallow(<HeaderCardBase story={textStory} config={config} />);
    expect(wrapper.find(DefaultHeaderCard).length).toBe(1);
  });
  it("should call headerCardRender when passed in opts", () => {
    const headerCardRender = jest.fn();
    const modifiedConfig = { ...config };
    modifiedConfig.opts = {
      render: {
        headerCardRender
      }
    };
    const wrapper = shallow(<HeaderCardBase story={textStory} config={modifiedConfig} />);
    expect(headerCardRender.mock.calls.length).toBe(1);
    expect(wrapper.find(DefaultHeaderCard).length).toBe(0);
  });
});
