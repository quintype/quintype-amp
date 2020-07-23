import React from "react";
import { shallow } from "enzyme";
import { LiveListBase } from "./live-list";
import { liveBlogStory, config } from "../../__fixtures__";

describe("LiveList", () => {
  it("should not add 'disabled' attribute on open live blog stories", () => {
    const activeLiveBlogStory = { ...liveBlogStory };
    delete activeLiveBlogStory.metadata["is-closed"];
    const wrapper = shallow(
      <LiveListBase config={config} story={activeLiveBlogStory}>
        <div>foo</div>
      </LiveListBase>
    );
    expect(wrapper.find("amp-live-list").prop("disabled")).toBeUndefined();
  });
  it("should add 'disabled' attribute on closed live blog stories", () => {
    const activeLiveBlogStory = { ...liveBlogStory };
    activeLiveBlogStory.metadata["is-closed"] = true;
    const wrapper = shallow(
      <LiveListBase config={config} story={activeLiveBlogStory}>
        <div>foo</div>
      </LiveListBase>
    );
    expect(wrapper.find("amp-live-list").prop("disabled")).toBe("");
  });
  it("should apply dataPollInterval and dataMaxItemsPerPage values if passed via featureConfig", () => {
    const modifiedConfig = { ...config };
    modifiedConfig.opts = {
      featureConfig: {
        liveBlog: {
          dataPollInterval: "10000",
          dataMaxItemsPerPage: "50"
        }
      }
    };
    const wrapper = shallow(
      <LiveListBase config={modifiedConfig} story={liveBlogStory}>
        <div>foo</div>
      </LiveListBase>
    );
    expect(wrapper.find("amp-live-list").prop("data-poll-interval")).toBe("10000");
    expect(wrapper.find("amp-live-list").prop("data-max-items-per-page")).toBe("50");
  });
  it("should apply default attr values on amp-live-list", () => {
    const wrapper = shallow(
      <LiveListBase config={config} story={liveBlogStory}>
        <div>foo</div>
      </LiveListBase>
    );
    expect(wrapper.find("amp-live-list").prop("data-poll-interval")).toBe("30000");
    expect(wrapper.find("amp-live-list").prop("data-max-items-per-page")).toBe("1000");
  });
});
