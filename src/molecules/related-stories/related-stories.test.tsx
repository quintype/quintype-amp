/**
 * @jest-environment node
 */

import React from "react";
import { RelatedStories, Heading } from "./related-stories";
import { shallow } from "enzyme";
import { renderToString } from "../../helpers";
import { Layout, Link } from "../../atoms";
import { isValidAmpHtml } from "../../utils/validate-amp";
import { config, relatedStories, textStory } from "../../__fixtures__";

describe("RelatedStories", () => {
  it("should render default", () => {
    const wrapper = shallow(<RelatedStories stories={relatedStories} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render if valid stories are passed", () => {
    const wrapper = shallow(<RelatedStories stories={relatedStories} />);
    expect(wrapper.find(Heading).length).toBe(1);
  });
  it("Should return valid amp-html", async () => {
    const component = (
      <Layout story={textStory} config={config}>
        <Link rel="canonical" href="." />
        <RelatedStories stories={relatedStories} />
      </Layout>
    );
    const { ampHtml } = renderToString(component);
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
