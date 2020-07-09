import React from "react";
import { shallow } from "enzyme";
import { Twitter } from "./twitter";

describe("Twitter", () => {
  it("should render tweet", () => {
    const wrapper = shallow(<Twitter data-tweetid="885634330868850689" title="twitter" />);
    expect(wrapper.find("amp-twitter").length).toBe(1);
  });
  it("should render tweet with default params", () => {
    const wrapper = shallow(<Twitter data-tweetid="885634330868850689" title="twitter" />);
    expect(wrapper.find("amp-twitter").prop("width")).toBe("390");
    expect(wrapper.find("amp-twitter").prop("height")).toBe("330");
    expect(wrapper.find("amp-twitter").prop("layout")).toBe("responsive");
  });
  it("should render tweet with custom params", () => {
    const wrapper = shallow(
      <Twitter data-tweetid="885634330868850689" width="250" height="250" layout="fixed" title="twitter" />
    );
    expect(wrapper.find("amp-twitter").prop("width")).toBe("250");
    expect(wrapper.find("amp-twitter").prop("layout")).toBe("fixed");
  });
});
