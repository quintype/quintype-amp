import React from "react";
import { visualStory, config } from "../../../__fixtures__";
import { WebStoryBase } from "./web-story";
import { shallow } from "enzyme";

describe("webstory component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <WebStoryBase story={visualStory} config={config}>
        <div>child</div>
      </WebStoryBase>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
