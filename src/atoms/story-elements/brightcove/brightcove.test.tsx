import React from "react";
import { DefaultBrightcove, BrightcoveBase } from "./brightcove";
import { shallow } from "enzyme";
import { textStory, config } from "../../../__fixtures__";

const sampleBrightcoveElement = {
  description: "",
  "page-url": "/story/b7b6ecab-2b4f-4dc1-b04a-0b0ec76a50c4/element/2cfc6b4e-85fb-47b0-ae4e-580a650372f7",
  type: "external-file",
  "family-id": "0148ec01-3c7c-49ee-8a3f-db8ca4907dc8",
  title: "",
  "file-type": "video",
  id: "2cfc6b4e-85fb-47b0-ae4e-580a650372f7",
  url: null,
  "content-type": "video/brightcove",
  metadata: {
    "account-id": "1752604059001",
    "player-id": "H1xW7NWcz",
    "player-media": "default",
    "video-id": "6156696074001",
    "embed-code":
      "aHR0cHM6Ly9wbGF5ZXJzLmJyaWdodGNvdmUubmV0LzI3NjY2MjQ5MDUwMDEvZGVmYXVsdF9kZWZhdWx0L2luZGV4Lmh0bWw/dmlkZW9JZD02MzIzMDIxNjcxMTEy",
    "player-url": "//players.brightcove.net/2766624905001/default_default/index.html?videoId=6323021671112"
  },
  subtype: "brightcove-video"
};
const { metadata, ...sampleBrightcoveElementWithoutMeta } = sampleBrightcoveElement;

describe("Brightcove", () => {
  it("should render default", () => {
    const wrapper = shallow(<DefaultBrightcove element={sampleBrightcoveElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should call brightcoveElementRender when passed", () => {
    const brightcoveElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { storyElementRender: { brightcoveElementRender } } } };
    const wrapper = shallow(
      <BrightcoveBase element={sampleBrightcoveElement} story={textStory} config={modifiedConfig} />
    );
    expect(brightcoveElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find(DefaultBrightcove).length).toBe(0);
  });
  it("shouldn't render brightcove", () => {
    const wrapper = shallow(<DefaultBrightcove element={sampleBrightcoveElementWithoutMeta} />);
    expect(wrapper.find("amp-brightcove").length).toBe(0);
  });
});
