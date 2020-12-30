import { shallow } from "enzyme";
import { FontsBase } from "./fonts";
import React from "react";

const dummyConfig = {
  ampConfig: {
    fonts: {
      primary: {
        url: "Mukta+Malar:300,400,600,700",
        family: '"Mukta Malar", sans-serif'
      },
      secondary: {
        url: "Mukta+Malar:400,400italic,700,700italic",
        family: '"Mukta Malar",sans-serif'
      }
    }
  }
};

describe("Fonts component", () => {
  it("Should match snapshot", () => {
    const wrapper = shallow(<FontsBase config={dummyConfig} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Should preconnect to fonts provider and preload fonts", () => {
    const wrapper = shallow(<FontsBase config={dummyConfig} />);
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("rel")
    ).toBe("preconnect dns-prefetch");
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:300,400,600,700");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("rel")
    ).toBe("preload");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(2)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:400,400italic,700,700italic");
  });
});
