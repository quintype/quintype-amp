import React from "react";
import { mount, shallow } from "enzyme";
import { DailyMotionElement, DailyMotionElementBase } from "./daily-motion-element";
import { textStory, config } from "../../../__fixtures__";
import { DailyMotion } from "../../daily-motion";
const sampleDailyMotionElement = {
  description: "",
  "embed-js":
    "PGlmcmFtZSBmcmFtZWJvcmRlcj0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNjAiIHNyYz0iaHR0cHM6Ly93d3cuZGFpbHltb3Rpb24uY29tL2VtYmVkL3ZpZGVvL3g3dDluMTMiIGFsbG93ZnVsbHNjcmVlbiBhbGxvdz0iYXV0b3BsYXkiPjwvaWZyYW1lPg==",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/89d43010-36f3-427b-a344-ef1630dc9745",
  type: "jsembed",
  "family-id": "0c2c5683-37c5-4cbf-b51f-0fe43f408a23",
  title: "",
  id: "89d43010-36f3-427b-a344-ef1630dc9745",
  metadata: {
    "dailymotion-url": "https://www.dailymotion.com/video/x7t9n13",
    provider: "dailymotion-video",
    "video-id": "x7t9n13"
  },
  subtype: "dailymotion-video"
};

describe("DailyMotion Element", () => {
  it("should render daily motion video", () => {
    const wrapper = mount(<DailyMotionElement element={sampleDailyMotionElement} />);
    expect(wrapper.find("amp-dailymotion").length).toBe(1);
  });
  it("should call storyElementRender prop when passed to opts", () => {
    const storyElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { ...config.opts, storyElementRender } };
    const wrapper = shallow(
      <DailyMotionElementBase element={sampleDailyMotionElement} story={textStory} config={modifiedConfig} />
    );
    expect(storyElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find(DailyMotion).length).toBe(0);
  });
});
