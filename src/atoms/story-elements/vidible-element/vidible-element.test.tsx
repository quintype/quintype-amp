import React from "react";
import { mount, shallow } from "enzyme";
import { DefaultVidibleElement, VidibleElementBase } from "./vidible-element";
import { config, textStory } from "../../../__fixtures__";

const sampleVidibleElement = {
  description: "",
  "embed-js":
    "PGRpdiBjbGFzcz0idmRiX3BsYXllciB2ZGJfNTliZjVhMzQ4NWViNDI2YWMyOGNkNGU2NTZkNWY3OTVlNGIwY2VmMDNhNmNjZTdjIiB2ZGJfcGFyYW1zPSJtLnBsYXliYWNrPWNsaWNrIj4KICAgICAgICA8c2NyaXB0IHR5cGU9J3RleHQvamF2YXNjcmlwdCcgc3JjPSJodHRwczovL2RlbGl2ZXJ5LnZpZGlibGUudHYvanNvbnAvcGlkPTU5YmY1YTM0ODVlYjQyNmFjMjhjZDRlNi92aWQ9NWU0MmQ2YzE4YzNhZTgyOTQwMWE5ZWE1LzU2ZDVmNzk1ZTRiMGNlZjAzYTZjY2U3Yy5qcz9tLnBsYXliYWNrPWNsaWNrIj4KCTwvc2NyaXB0PgogICA8L2Rpdj4=",
  "page-url": "/story/cf57a925-f97b-4d38-bb1c-f6341ef40f88/element/e59dd65a-a413-400c-b436-26979d444ca6",
  type: "jsembed",
  "family-id": "7b2b4e43-2942-4c18-b34c-78e4abceb515",
  title: "",
  id: "e59dd65a-a413-400c-b436-26979d444ca6",
  metadata: {
    "vidible-video-id": "5e42d6c18c3ae829401a9ea5",
    "duration-millis": 515158,
    "player-url":
      "https://delivery.vidible.tv/htmlembed/pid=59bf5a3485eb426ac28cd4e6/56d5f795e4b0cef03a6cce7c.html?vid=5e42d6c18c3ae829401a9ea5",
    "include-in-video-sitemap": true
  },
  subtype: "vidible-video"
};

describe("Vidible Element", () => {
  it("should render vidible video", () => {
    const wrapper = mount(<DefaultVidibleElement element={sampleVidibleElement} />);
    expect(wrapper.find("amp-o2-player").length).toBe(1);
  });
  it("should auto play, disable macros", () => {
    const wrapper = mount(<DefaultVidibleElement element={sampleVidibleElement} data-macros="auto" />);
    expect(wrapper.find("amp-o2-player").prop("data-macros")).toBe("auto");
  });
  it("should call vidibleElementRender prop when passed to opts", () => {
    const vidibleElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { ...config.opts, vidibleElementRender } };
    const wrapper = shallow(
      <VidibleElementBase element={sampleVidibleElement} story={textStory} config={modifiedConfig} />
    );
    expect(vidibleElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find(DefaultVidibleElement).length).toBe(0);
  });
});
