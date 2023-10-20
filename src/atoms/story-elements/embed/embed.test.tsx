import React from "react";
import { DefaultEmbed, EmbedBase, getIframeContent } from "./embed";
import { shallow } from "enzyme";
import { Iframe } from "../../iframe";
import { config, textStory } from "../../../__fixtures__";

const sampleJsEmbedElement = {
  description: "",
  "embed-js":
    "PGlmcmFtZSBoZWlnaHQ9IjI2NSIgc3R5bGU9IndpZHRoOiAxMDAlOyIgc2Nyb2xsaW5nPSJubyIgdGl0bGU9ImxpZ2h0IGJ1bGIiIHNyYz0iaHR0cHM6Ly9jb2RlcGVuLmlvL3ZsYWRpc3NsYXd3dy9lbWJlZC9wb2p2enFaP2hlaWdodD0yNjUmdGhlbWUtaWQ9ZGFyayZkZWZhdWx0LXRhYj1odG1sLHJlc3VsdCIgZnJhbWVib3JkZXI9Im5vIiBhbGxvd3RyYW5zcGFyZW5jeT0idHJ1ZSIgYWxsb3dmdWxsc2NyZWVuPSJ0cnVlIiBsb2FkaW5nPSJsYXp5Ij4KICBTZWUgdGhlIFBlbiA8YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vdmxhZGlzc2xhd3d3L3Blbi9wb2p2enFaJz5saWdodCBidWxiPC9hPiBieSB2bGFkaXNzbGF3dwogICg8YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vdmxhZGlzc2xhd3d3Jz5AdmxhZGlzc2xhd3d3PC9hPikgb24gPGEgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvJz5Db2RlUGVuPC9hPi4KPC9pZnJhbWU+",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/5bf7ba6d-9a51-41f2-b919-47539c4a5acd",
  type: "jsembed",
  "family-id": "f564d440-c969-4c35-9c5e-ddb032e22b05",
  title: "embed code",
  id: "5bf7ba6d-9a51-41f2-b919-47539c4a5acd",
  metadata: {},
  subtype: null
};

const sampleJsEmbedElement1 = {
  description: "",
  "embed-js":
    "PGlmcmFtZSBzcmM9Imh0dHBzOi8vd3d3LmVyZW1uZXdzLmNvbS9zdG9yaWVzLzIwMjIvMTAvMTkv2YXYtdixLTEwLz9vcHRzPWZiOjEiIGZyYW1lYm9yZGVyPSIwIiBzY3JvbGxpbmc9Im5vIiBzdHlsZT0id2lkdGg6MzAwcHg7aGVpZ2h0OjYwMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowIGF1dG87ZGlzcGxheTpibG9jazsiPjwvaWZyYW1lPg==",
  "page-url": "/story/455a3761-b36b-4e89-b7ab-82bcde10a575/element/90530086-53b9-446a-95e9-aaacded9dec1",
  type: "jsembed",
  "family-id": "a3ae9de4-0a89-41bb-b516-084f306d65d9",
  title: "",
  id: "90530086-53b9-446a-95e9-aaacded9dec1",
  metadata: {},
  subtype: null
};

const sampleJsEmbedElementWithoutIframe = {
  description: "embed code",
  "embed-js":
    "PGJsb2NrcXVvdGUgY2xhc3M9InR3aXR0ZXItdHdlZXQiPjxwIGxhbmc9ImVuIiBkaXI9Imx0ciI+UmVzaXplT2JzZXJ2ZXIgbGV0cyB1cyBvYnNlcnZlIGNoYW5nZXMgdG8gdGhlIGxheW91dCBzaXplIG9mIGVsZW1lbnRzOiA8YSBocmVmPSJodHRwczovL3QuY28vWklzd1F5TmVtVCI+aHR0cHM6Ly90LmNvL1pJc3dReU5lbVQ8L2E+IEl0JiMzOTtzIGluIHRoZSBsYXRlc3QgU2FmYXJpISA8YnI+PGJyPk5vdyBpbiAqYWxsKiBtb2Rlcm4gYnJvd3NlcnMsIHdlIGNhbiBlZmZpY2llbnRseSBkZXNpZ24gY29tcG9uZW50cyByZXNwb25zaXZlIHRvIHRoZWlyIGNvbnRhaW5lciB2cy4ganVzdCB0aGUgdmlld3BvcnQuIDxhIGhyZWY9Imh0dHBzOi8vdC5jby9UTks5VkRqU0FaIj5waWMudHdpdHRlci5jb20vVE5LOVZEalNBWjwvYT48L3A+Jm1kYXNoOyBBZGR5IE9zbWFuaSAoQGFkZHlvc21hbmkpIDxhIGhyZWY9Imh0dHBzOi8vdHdpdHRlci5jb20vYWRkeW9zbWFuaS9zdGF0dXMvMTI0ODg5OTA4NjQ5MDU1ODQ2NT9yZWZfc3JjPXR3c3JjJTVFdGZ3Ij5BcHJpbCAxMSwgMjAyMDwvYT48L2Jsb2NrcXVvdGU+IDxzY3JpcHQgYXN5bmMgc3JjPSJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanMiIGNoYXJzZXQ9InV0Zi04Ij48L3NjcmlwdD4=",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/5bf7ba6d-9a51-41f2-b919-47539c4a5acd",
  type: "jsembed",
  "family-id": "f564d440-c969-4c35-9c5e-ddb032e22b05",
  title: "",
  id: "5bf7ba6d-9a51-41f2-b919-47539c4a5acd",
  metadata: {},
  subtype: null
};

describe("Embed", () => {
  it("should render embed", () => {
    const wrapper = shallow(<DefaultEmbed element={sampleJsEmbedElement} />);
    expect(wrapper.find(Iframe).length).toBe(1);
  });
  it("should render null", () => {
    const wrapper = shallow(<DefaultEmbed element={sampleJsEmbedElementWithoutIframe} />);
    expect(wrapper.find(Iframe).length).toBe(0);
  });
  it("should call embedRender prop when passed to opts", () => {
    const embedRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { storyElementRender: { embedRender } } } };
    const wrapper = shallow(<EmbedBase element={sampleJsEmbedElement} story={textStory} config={modifiedConfig} />);
    expect(embedRender.mock.calls.length).toBe(1);
    expect(wrapper.find(DefaultEmbed).length).toBe(0);
  });
});

describe("getIframeSourceURL", () => {
  it("should return source of iframe", () => {
    expect(
      getIframeContent(
        '<iframe frameborder="0" src="https://www.google.com" title="google" />',
        /(?<=src=").*?(?=[*"])/
      )
    ).toBe("https://www.google.com");
  });
  it("should return null if source is missing", () => {
    expect(getIframeContent('<script src="www.google.com" />', /(?<=src=").*?(?=[*"])/)).toBe(null);
  });
});

describe("decode base64", () => {
  it("renders with correct decoded url", () => {
    const wrapper = shallow(<DefaultEmbed element={sampleJsEmbedElement1} />);
    expect(wrapper.find(Iframe).prop("src")).toEqual("https://www.eremnews.com/stories/2022/10/19/مصر-10/?opts=fb:1");
  });
});
