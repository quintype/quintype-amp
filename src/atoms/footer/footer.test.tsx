import React from "react";
import { BaseFooter, PoweredBy } from "./footer";
import { shallow } from "enzyme";
import { Config } from "../../types/config";
import { config } from "../../../src/__fixtures__";

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
  it("should render powered by quintype when showPoweredByQt attribute is not passed", () => {
    const wrapper = shallow(<BaseFooter config={config} />);
    expect(wrapper.find(PoweredBy).exists()).toBeTruthy();
  });
  it("should render powered by quintype when showPoweredByQt attribute is passed as a function with truthy value", () => {
    const defaultConfig: Config = config;
    defaultConfig.opts = {
      featureConfig: {
        showPoweredByQt: () => true
      }
    };

    const wrapper = shallow(<BaseFooter config={defaultConfig} />);
    expect(wrapper.find(PoweredBy).exists()).toBeTruthy();
  });
  it("should not render powered by quintype when showPoweredByQt attribute is passed as a function with falsy value", () => {
    const defaultConfig: Config = config;
    defaultConfig.opts = {
      featureConfig: {
        showPoweredByQt: () => false
      }
    };

    const wrapper = shallow(<BaseFooter config={defaultConfig} />);
    expect(wrapper.find(PoweredBy).exists()).toBeFalsy();
  });
  it("should render powered by quintype when showPoweredByQt attribute is passed as a boolean with truthy value", () => {
    const defaultConfig: Config = config;
    defaultConfig.opts = {
      featureConfig: {
        showPoweredByQt: true
      }
    };

    const wrapper = shallow(<BaseFooter config={defaultConfig} />);
    expect(wrapper.find(PoweredBy).exists()).toBeTruthy();
  });
  it("should not render powered by quintype when showPoweredByQt attribute is passed as a boolean with falsy value", () => {
    const defaultConfig: Config = config;
    defaultConfig.opts = {
      featureConfig: {
        showPoweredByQt: false
      }
    };

    const wrapper = shallow(<BaseFooter config={defaultConfig} />);
    expect(wrapper.find(PoweredBy).exists()).toBeFalsy();
  });
});
