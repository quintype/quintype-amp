import React from "react";
import { visualStory, config } from "../../../__fixtures__";
import { CoverPageBase } from "./cover-page";
import { shallow } from "enzyme";

describe("CoverPage Component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<CoverPageBase story={visualStory} config={config} />);
    expect(wrapper).toMatchSnapshot();
  });
});
