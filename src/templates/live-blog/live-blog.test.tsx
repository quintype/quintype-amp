import React from "react";
import { shallow } from "enzyme";
import { LiveBlog } from "./live-blog";
import { textStory, config } from "../../__fixtures__";
import { TopAd, BodyAd, BottomAd } from "../../molecules/ads";
import { InfiniteScroll } from "../../atoms";

describe("LiveBlog Template", () => {
  it("should render infinite scroll component if exists", () => {
    const wrapper = shallow(<LiveBlog story={textStory} config={config} />);
    expect(wrapper.find(InfiniteScroll).length).toBe(1);
  });
  it("should set 'templateName' prop as 'liveBlog' for all DFP ads", () => {
    const wrapper = shallow(<LiveBlog story={textStory} config={config} />);
    expect(wrapper.find(TopAd).prop("templateName")).toBe("liveBlog");
    expect(wrapper.find(BottomAd).prop("templateName")).toBe("liveBlog");
    wrapper.find(BodyAd).forEach((node) => {
      // because live blog has multiple body ads
      expect(node.prop("templateName")).toBe("liveBlog");
    });
  });
});
