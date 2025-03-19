import React from "react";
import { DefaultJwPlayer, JwPlayerBase } from "./jw";
import { shallow } from "enzyme";
import { textStory, config } from "../../../__fixtures__";

const createJwElement = (metadata = {}) => ({
  description: "",
  "page-url": "/story/b347bace-45d8-4b75-9cca-10bd7600b427/element/165a183c-1535-4438-85a4-abf074a40b54",
  type: "external-file",
  "family-id": "655786e1-a0cf-4cc3-8456-8d368c76054d",
  title: "",
  "file-type": "video",
  id: "165a183c-1535-4438-85a4-abf074a40b54",
  url: "//content.jwplatform.com/videos/OIqdGtgX.mp4",
  "content-type": "video/jwplayer",
  metadata,
  subtype: "jwplayer"
});

const sampleJwElement = createJwElement({
  "video-id": "OIqdGtgX",
  "player-id": "w6gmf5Fj",
  "video-url": "//content.jwplatform.com/videos/OIqdGtgX.mp4",
  "thumbnail-url": "//content.jwplatform.com/thumbs/OIqdGtgX.jpg",
  "player-url": "//content.jwplatform.com/players/OIqdGtgX-w6gmf5Fj.html",
  "embed-code": "aHR0cHM6Ly9jZG4uandwbGF5ZXIuY29tL3BsYXllcnMvT0lxZEd0Z1gtdzZnbWY1RmouaHRtbA=="
});

const sampleJwWithoutMetadata = createJwElement();

describe("Jw Player", () => {
  it("should render default", () => {
    const wrapper = shallow(<DefaultJwPlayer element={sampleJwElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should call jwPlayerElementRender when passed", () => {
    const jwPlayerElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { storyElementRender: { jwPlayerElementRender } } } };
    const wrapper = shallow(<JwPlayerBase element={sampleJwElement} story={textStory} config={modifiedConfig} />);
    expect(jwPlayerElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find(DefaultJwPlayer).length).toBe(0);
  });
  it("shouldn't render jw player", () => {
    const wrapper = shallow(<DefaultJwPlayer element={sampleJwWithoutMetadata} />);
    expect(wrapper.find("amp-jwplayer").length).toBe(0);
  });
});
