import React from "react";
import { shallow } from "enzyme";
import { Pending } from "./pending";

const sampleElement = {
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
describe("Pending", () => {
  it("should render pending element", () => {
    const wrapper = shallow(<Pending element={sampleElement} />);
    expect(wrapper).toMatchSnapshot();
  });
});
