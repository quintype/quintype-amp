import React from "react";
import { BaseFooter } from "./footer";
import { shallow } from "enzyme";

describe("Footer", () => {
  it("should render", () => {
    const wrapper = shallow(<BaseFooter />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render children", () => {
    const wrapper = shallow(
      <BaseFooter>
        <amp-img
          src="https://images.unsplash.com/photo-1558980395-be8a5fcb4251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          width="400"
          height="300"
          alt="a sample image"
        />
      </BaseFooter>
    );
    expect(wrapper.find("amp-img").length).toBe(1);
  });
});
