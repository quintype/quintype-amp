import React from "react";

import { Author } from "./author";
import { shallow } from "enzyme";

const singleAuthor = [
  {
    name: "Bruce Wayne",
    id: 1,
    slug: "/wayne",
    "avatar-url": "",
    "avatar-s3-key": null,
    "twitter-handle": null,
    bio: null,
    "contributor-role": null
  }
];
const twoAuthors = [
  {
    name: "Alfred Pennyworth",
    id: 2,
    slug: "/pennyworth",
    "avatar-url": "",
    "avatar-s3-key": null,
    "twitter-handle": null,
    bio: null,
    "contributor-role": null
  },
  {
    name: "Selena Kyle",
    id: 3,
    slug: "/kyle",
    "avatar-url": "",
    "avatar-s3-key": null,
    "twitter-handle": null,
    bio: null,
    "contributor-role": null
  }
];
const multipleAuthors = [...singleAuthor, ...twoAuthors];

describe("Author", () => {
  it("should display authors", () => {
    const wrapper = shallow(<Author authors={multipleAuthors} />);
    expect(wrapper.text()).toBe(" Bruce Wayne, Alfred Pennyworth & Selena Kyle");
  });
  it("should render one author without comma", () => {
    const wrapper = shallow(<Author authors={singleAuthor} />);
    expect(wrapper.text()).toBe("Bruce Wayne");
  });
  it("should render two authors", () => {
    const wrapper = shallow(<Author authors={twoAuthors} />);
    expect(wrapper.text()).toBe(" Alfred Pennyworth & Selena Kyle");
  });
  it("should prepend text", () => {
    const wrapper = shallow(<Author authors={multipleAuthors} prepend="By" />);
    expect(wrapper.text()).toBe("By Bruce Wayne, Alfred Pennyworth & Selena Kyle");
  });
  it("should prepend an icon", () => {
    const wrapper = shallow(<Author authors={multipleAuthors} prepend={<img src="https://placehold.it/32x32" />} />);
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.text()).toBe(" Bruce Wayne, Alfred Pennyworth & Selena Kyle");
  });
});
