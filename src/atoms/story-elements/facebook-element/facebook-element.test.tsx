import React from "react";
import { mount, shallow } from "enzyme";
import { FacebookElement, FacebookElementBase } from "./facebook-element";
import { config, textStory } from "../../../__fixtures__";
import { Facebook } from "../../facebook";
const sampleFacebookElement = {
  description: "",
  "embed-js":
    "PGRpdiBpZD0iZmItcm9vdCI+PC9kaXY+CjxzY3JpcHQgYXN5bmM9IjEiIGRlZmVyPSIxIiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBzcmM9Imh0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzI3hmYm1sPTEmYW1wO3ZlcnNpb249djYuMCI+PC9zY3JpcHQ+PGRpdiBjbGFzcz0iZmItcG9zdCIgZGF0YS1ocmVmPSJodHRwczovL3d3dy5mYWNlYm9vay5jb20vTUJBQ3J5c3RhbEJhbGwvcG9zdHMvMzQ4MzczODE4MTY1MjkxMyIgZGF0YS13aWR0aD0iNTUyIj48YmxvY2txdW90ZSBjaXRlPSJodHRwczovL3d3dy5mYWNlYm9vay5jb20vTUJBQ3J5c3RhbEJhbGwvcG9zdHMvMzQ4MzczODE4MTY1MjkxMyIgY2xhc3M9ImZiLXhmYm1sLXBhcnNlLWlnbm9yZSI+PHA+UXVlcnkgb24gb3VyIFlvdVR1YmUgY2hhbm5lbDogQWNjb3JkaW5nIHRvIFhZWiBhcnRpY2xlLCBhdXRvbWF0aW9uIHdpbGwgdGFrZSBvdmVyIGFsbW9zdCBhbGwgZmluYW5jZSBqb2JzIGluIHRoZSBuZWFyLi4uPC9wPlBvc3RlZCBieSA8YSBocmVmPSJodHRwczovL3d3dy5mYWNlYm9vay5jb20vTUJBQ3J5c3RhbEJhbGwvIj5NQkEgQ3J5c3RhbCBCYWxsPC9hPiBvbiZuYnNwOzxhIGhyZWY9Imh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9NQkFDcnlzdGFsQmFsbC9wb3N0cy8zNDgzNzM4MTgxNjUyOTEzIj5UaHVyc2RheSwgRmVicnVhcnkgMjcsIDIwMjA8L2E+PC9ibG9ja3F1b3RlPjwvZGl2Pg==",
  "page-url": "/story/af018d6b-2166-4344-b167-40405a148e41/element/c4fba672-a3c8-462c-9cd5-0a341bf681d9",
  type: "jsembed",
  "family-id": "0f9cfaa8-cdec-4a06-ad21-aad1ba33e195",
  title: "",
  id: "c4fba672-a3c8-462c-9cd5-0a341bf681d9",
  metadata: {
    "facebook-url": "https://www.facebook.com/MBACrystalBall/posts/3483738181652913",
    provider: "facebook-post",
    "post-id": "3483738181652913"
  },
  subtype: "facebook-post"
};

const { metadata, ...sampleFacebookElementWithoutMetadata } = sampleFacebookElement;

describe("Facebook Element", () => {
  it("should render facebook", () => {
    const wrapper = mount(<FacebookElement element={sampleFacebookElement} />);
    expect(wrapper.find("amp-facebook").length).toBe(1);
  });
  it("should call facebookElementRender prop when passed to opts", () => {
    const facebookElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { storyElementRender: { facebookElementRender } } } };
    const wrapper = shallow(
      <FacebookElementBase element={sampleFacebookElement} story={textStory} config={modifiedConfig} />
    );
    expect(facebookElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find(Facebook).length).toBe(0);
  });
  it("shouldn't render facebook", () => {
    const wrapper = mount(<FacebookElement element={sampleFacebookElementWithoutMetadata} />);
    expect(wrapper.find("amp-facebook").length).toBe(0);
  });
});
