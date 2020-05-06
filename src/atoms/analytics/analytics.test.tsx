import React from "react";
import { Analytics } from "./analytics";
import { shallow } from "enzyme";

describe("Analytics", () => {
  it("should render amp-analytics", () => {
    const wrapper = shallow(<Analytics />);
    expect(wrapper.find("amp-analytics").length).toBe(1);
  });

  it("should render targets inside a script tag", () => {
    const wrapper = shallow(
      <Analytics
        targets={{
          vars: "custom variable"
        }}
      />
    );
    expect(wrapper.find("script[type='application/json']").html()).toEqual(
      '<script type="application/json">{"vars":"custom variable"}</script>'
    );
  });
  it("should render type prop", () => {
    const wrapper = shallow(<Analytics type="googleanalytics" />);
    expect(wrapper.find("amp-analytics").prop("type")).toBe("googleanalytics");
  });

  it("should render data-credentials prop", () => {
    const wrapper = shallow(<Analytics data-credentials="include" />);
    expect(wrapper.find("amp-analytics").prop("data-credentials")).toBe("include");
  });
  it("should render config prop", () => {
    const wrapper = shallow(<Analytics config="googleanalytics" />);
    expect(wrapper.find("amp-analytics").prop("config")).toBe("googleanalytics");
  });
});
