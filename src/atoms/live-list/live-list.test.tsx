import React from "react";
import { shallow } from "enzyme";
import { LiveListBase } from "./live-list";
import { liveBlogStory } from "../../__fixtures__";

describe("LiveList", () => {
  it("should not add 'disabled' attribute on open live blog stories", () => {
    const activeLiveBlogStory = { ...liveBlogStory };
    delete activeLiveBlogStory.metadata["is-closed"];
    const wrapper = shallow(
      <LiveListBase story={activeLiveBlogStory}>
        <div>foo</div>
      </LiveListBase>
    );
    expect(wrapper.find("amp-live-list").prop("disabled")).toBeUndefined();
  });
  it("should add 'disabled' attribute on closed live blog stories", () => {
    const activeLiveBlogStory = { ...liveBlogStory };
    activeLiveBlogStory.metadata["is-closed"] = true;
    const wrapper = shallow(
      <LiveListBase story={activeLiveBlogStory}>
        <div>foo</div>
      </LiveListBase>
    );
    expect(wrapper.find("amp-live-list").prop("disabled")).toBe("");
  });
});
