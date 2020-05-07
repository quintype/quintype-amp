import React from "react";
import { QuintypeAnalyticsBase } from "./quintype-analytics";
import { shallow } from "enzyme";
import { textStory, config } from "../../__fixtures__";
import { Analytics } from "../analytics";

describe("Quintype Analytics", () => {
  it("should render with publisher id", () => {
    const wrapper = shallow(<QuintypeAnalyticsBase story={textStory} config={config} />);
    expect(wrapper.find(Analytics).prop("targets")).toEqual({
      requests: {
        storyview:
          "https://prod-analytics.qlitics.com/api/${random}/amp?publisher-id=${publisherId}&event-type=${eventType}&story-content-id=${storyContentId}&url=${ampdocUrl}&referrer=${documentReferrer}"
      },
      vars: { publisherId: 1, storyContentId: "7f3d5bdb-ec52-4047-ac0d-df4036ec974b" },
      triggers: { trackStoryview: { on: "visible", request: "storyview", vars: { eventType: "story-view" } } }
    });
  });
});
