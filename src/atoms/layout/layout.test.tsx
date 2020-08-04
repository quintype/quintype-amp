import React from "react";
import { shallow } from "enzyme";
import { Layout } from "./layout";
import { textStory, config } from "../../__fixtures__";

describe("Layout", () => {
  it("Should prefetch primary & secondary fonts given by the publisher", () => {
    const modifiedConfig = { ...config };
    modifiedConfig.ampConfig.fonts = {
      primary: {
        url: "Mukta+Malar:300,400,600,700",
        family: '"Mukta Malar", sans-serif'
      },
      secondary: {
        url: "Mukta+Malar:400,400italic,700,700italic",
        family: '"Mukta Malar",sans-serif'
      }
    };
    const wrapper = shallow(
      <Layout story={textStory} config={modifiedConfig}>
        <div>foo</div>
      </Layout>
    );
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("rel")
    ).toBe("dns-prefetch");
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("crossorigin")
    ).toBe("anonymous");
    expect(
      wrapper
        .find(`link`)
        .at(0)
        .prop("href")
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:300,400,600,700");
    expect(
      wrapper
        .find(`link`)
        .at(1)
        .prop("rel")
    ).toBe("dns-prefetch");
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
    ).toBe("https://fonts.googleapis.com/css?family=Mukta+Malar:400,400italic,700,700italic");
  });
});
