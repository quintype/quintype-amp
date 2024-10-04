import React from "react";
import { mount, shallow } from "enzyme";
import { config, textStory, tiktokElement } from "../../../__fixtures__";
import { TiktokElement, TiktokElementBase } from "./tiktok-element";

const { metadata, ...sampleTiktokElementWithoutMetadata } = tiktokElement;

describe("Tiktok Element", () => {
  it("should render Tiktok", () => {
    const wrapper = mount(<TiktokElement element={tiktokElement} />);
    expect(wrapper.find("amp-tiktok").length).toBe(1);
  });
  it("should call tiktokElementRender prop when passed to opts", () => {
    const tiktokElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { storyElementRender: { tiktokElementRender } } } };
    const wrapper = shallow(<TiktokElementBase element={tiktokElement} story={textStory} config={modifiedConfig} />);
    expect(tiktokElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find(TiktokElement).length).toBe(0);
  });
  it("shouldn't render Tiktok", () => {
    const wrapper = mount(<TiktokElement element={sampleTiktokElementWithoutMetadata} />);
    expect(wrapper.find("amp-tiktok").length).toBe(0);
  });
});
