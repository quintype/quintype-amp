/**
 * @jest-environment node
 */

import React from "react";
import { RelatedStories, Heading } from "./related-stories";
import { shallow } from "enzyme";
import { renderToString } from "../../helpers";
import { Layout } from "../../atoms";
import { isValidAmpHtml } from "../../utils/validate-amp";
import { config, relatedStories, textStory } from "../../__fixtures__";
import get from "lodash.get";

const relatedStoriesArr = get(relatedStories, "related-stories", []);

describe("RelatedStories", () => {
  it("should render default", () => {
    const wrapper = shallow(<RelatedStories stories={relatedStoriesArr} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render if valid stories are passed", () => {
    const wrapper = shallow(<RelatedStories stories={relatedStoriesArr} />);
    expect(wrapper.find(Heading).length).toBe(1);
  });
  it("Should return valid amp-html", async () => {
    const component = (
      <Layout story={textStory} config={config}>
        <RelatedStories stories={relatedStoriesArr} />
      </Layout>
    );
    const ampHtml = renderToString(component);
    if (ampHtml instanceof Error) throw ampHtml;
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
