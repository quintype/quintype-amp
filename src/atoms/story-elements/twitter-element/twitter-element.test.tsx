import React from "react";
import { mount, shallow } from "enzyme";
import { TwitterElement, TwitterElementBase } from "./twitter-element";
import { textStory, config } from "../../../__fixtures__";
import { Twitter } from "../../twitter";
const sampleTwitterElement = {
  description: "",
  "embed-js":
    "PGJsb2NrcXVvdGUgY2xhc3M9InR3aXR0ZXItdHdlZXQiPjxwIGxhbmc9ImVuIiBkaXI9Imx0ciI+4oCcRmVkZXJhbCBDb3VydCBEZWFscyBNYWpvciBCbG93IFRvIFNhbmN0dWFyeSBDaXRpZXMu4oCdIDxhIGhyZWY9Imh0dHBzOi8vdHdpdHRlci5jb20vRm94TmV3cz9yZWZfc3JjPXR3c3JjJTVFdGZ3Ij5ARm94TmV3czwvYT4gIEluIG90aGVyIHdvcmRzLCB0aGVyZSB3aWxsIGJlIG5vIG1vcmUgRmVkZXJhbCBUYXggRG9sbGFycyB0byBTdGF0ZXMgJmFtcDsgQ2l0aWVzIHRoYXQgd2lsbCBub3QgY29vcGVyYXRlIHdpdGggRmVkZXJhbCBMYXcgRW5mb3JjZW1lbnQgKElDRSkuIFRoaXMgaXMgQklHIE5FV1MhIEZ1bmRzIHdpbGwgYmUgY3V0IG9mZiBpbW1lZGlhdGVseS4gTUFLRSBBTUVSSUNBIEdSRUFUIEFHQUlOITwvcD4mbWRhc2g7IERvbmFsZCBKLiBUcnVtcCAoQHJlYWxEb25hbGRUcnVtcCkgPGEgaHJlZj0iaHR0cHM6Ly90d2l0dGVyLmNvbS9yZWFsRG9uYWxkVHJ1bXAvc3RhdHVzLzEyMzMyNzM4OTQwMzI4NzE0MjQ/cmVmX3NyYz10d3NyYyU1RXRmdyI+RmVicnVhcnkgMjgsIDIwMjA8L2E+PC9ibG9ja3F1b3RlPgo8c2NyaXB0IGFzeW5jIHNyYz0iaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzIiBjaGFyc2V0PSJ1dGYtOCI+PC9zY3JpcHQ+Cg==",
  "page-url": "/story/af018d6b-2166-4344-b167-40405a148e41/element/0815d5d1-6ee2-4681-aff8-ba0030bb7323",
  type: "jsembed",
  "family-id": "59e3f369-e859-4999-b74e-23ec45870bef",
  title: "",
  id: "0815d5d1-6ee2-4681-aff8-ba0030bb7323",
  metadata: {
    "tweet-url": "https://twitter.com/realDonaldTrump/status/1233273894032871424",
    provider: "twitter",
    "tweet-id": "1233273894032871424"
  },
  subtype: "tweet"
};

describe("Twitter Element", () => {
  it("should render twitter post", () => {
    const wrapper = mount(<TwitterElement element={sampleTwitterElement} />);
    expect(wrapper.find("amp-twitter").length).toBe(1);
  });
  it("should call twitterElementRender prop when passed to opts", () => {
    const twitterElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { ...config.opts, twitterElementRender } };
    const wrapper = shallow(
      <TwitterElementBase element={sampleTwitterElement} story={textStory} config={modifiedConfig} />
    );
    expect(twitterElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find(Twitter).length).toBe(0);
  });
});
