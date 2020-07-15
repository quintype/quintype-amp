import React from "react";
import { DefaultYouTube, YouTubeBase } from "./youtube";
import { shallow } from "enzyme";
import { textStory, config } from "../../../__fixtures__";

const sampleYouTubeElement = {
  description: "",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/2a3f1e74-df4b-4c8e-99de-57a69366b77f",
  type: "youtube-video",
  "family-id": "8256f5d1-5703-4c3f-8fc0-a6c4f44e531c",
  title: "",
  id: "2a3f1e74-df4b-4c8e-99de-57a69366b77f",
  url: "https://www.youtube.com/watch?v=jlEbFvGwcUc",
  "embed-url": "https://www.youtube.com/embed/jlEbFvGwcUc",
  metadata: {},
  subtype: null
};

const { url, ...sampleYouTubeElementWithoutUrl } = sampleYouTubeElement;

describe("Youtube", () => {
  it("should render default", () => {
    const wrapper = shallow(<DefaultYouTube element={sampleYouTubeElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should call youtubeElementRender when passed", () => {
    const youtubeElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { storyElementRender: { youtubeElementRender } } } };
    const wrapper = shallow(<YouTubeBase element={sampleYouTubeElement} story={textStory} config={modifiedConfig} />);
    expect(youtubeElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find(DefaultYouTube).length).toBe(0);
  });
  it("shouldn't render youtube", () => {
    const wrapper = shallow(<DefaultYouTube element={sampleYouTubeElementWithoutUrl} />);
    expect(wrapper.find("amp-youtube").length).toBe(0);
  });
});
