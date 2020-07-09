import React from "react";
import { shallow } from "enzyme";
import { Facebook } from "./facebook";

describe("Facebook", () => {
  it("should render facebook element", () => {
    const wrapper = shallow(
      <Facebook data-href="https://www.facebook.com/ParksCanada/posts/1712989015384373" title="facebook" />
    );
    expect(wrapper.find("amp-facebook").length).toBe(1);
  });
  it("should render facebook element with default params", () => {
    const wrapper = shallow(
      <Facebook data-href="https://www.facebook.com/ParksCanada/posts/1712989015384373" title="facebook" />
    );
    expect(wrapper.find("amp-facebook").prop("width")).toBe("16");
    expect(wrapper.find("amp-facebook").prop("height")).toBe("9");
    expect(wrapper.find("amp-facebook").prop("layout")).toBe("responsive");
  });
  it("should render facebook element with custom params", () => {
    const wrapper = shallow(
      <Facebook
        data-href="https://www.facebook.com/ParksCanada/posts/1712989015384373"
        width="250"
        height="250"
        layout="fixed"
        title="facebook"
      />
    );
    expect(wrapper.find("amp-facebook").prop("width")).toBe("250");
    expect(wrapper.find("amp-facebook").prop("layout")).toBe("fixed");
  });
  it("should render facebook video", () => {
    const wrapper = shallow(
      <Facebook
        data-href="https://www.facebook.com/nasaearth/videos/10155187938052139"
        data-embed-as="video"
        title="facebook"
      />
    );
    expect(wrapper.find("amp-facebook").prop("data-embed-as")).toBe("video");
  });
  it("should render facebook comment", () => {
    const wrapper = shallow(
      <Facebook
        data-href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185"
        data-embed-type="comment"
        title="facebook"
      />
    );
    expect(wrapper.find("amp-facebook").prop("data-embed-type")).toBe("comment");
  });
});
