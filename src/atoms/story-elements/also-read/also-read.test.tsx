import React from "react";
import { BaseAlsoRead } from "./also-read";
import { shallow, mount } from "enzyme";
import { textStory } from "../../../__fixtures__";
import { Theme } from "../../../context/theme";

const sampleAlsoReadElement = {
  description: "",
  "page-url": "/story/7f3d5bdb-ec52-4047-ac0d-df4036ec974b/element/2373433c-557d-48fb-8b32-0f2bdd65df78",
  type: "text",
  "family-id": "9b0816a1-de95-4048-bc86-2979911bcc86",
  title: "",
  id: "2373433c-557d-48fb-8b32-0f2bdd65df78",
  metadata: {
    "linked-story-id": "a7a06a3f-8d9a-450c-8eaa-387b7c8c6323",
    "linked-story": {
      headline: "LSAC Launches New Initiatives to Support Law School Enrollment Efforts in India",
      "story-content-id": "a7a06a3f-8d9a-450c-8eaa-387b7c8c6323",
      "highlighted-text": "",
      id: "a7a06a3f-8d9a-450c-8eaa-387b7c8c6323",
      "highlighted-headline": null
    }
  },
  subtype: "also-read",
  text: "LSAC Launches New Initiatives to Support Law School Enrollment Efforts in India"
};

describe("Also Read", () => {
  it("should render default", () => {
    const wrapper = shallow(<BaseAlsoRead element={sampleAlsoReadElement} story={textStory} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render with custom styles", () => {
    const wrapper = mount(
      <Theme>
        <BaseAlsoRead element={sampleAlsoReadElement} story={textStory} inlineStyles={{ color: "red" }} />
      </Theme>
    );
    expect(
      wrapper
        .find("div")
        .at(0)
        .prop("style")
    ).toStrictEqual({ color: "red" });
  });
});
