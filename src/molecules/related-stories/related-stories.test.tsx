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

describe("RelatedStories", () => {
  it("should render default", () => {
    const wrapper = shallow(<RelatedStories stories={relatedStories} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render if valid stories are passed", () => {
    const wrapper = shallow(<RelatedStories stories={relatedStories} />);
    expect(wrapper.find(Heading).length).toBe(1);
  });
  it("should not render if no stories are passed", () => {
    const wrapper = shallow(<RelatedStories stories={[]} />);
    expect(wrapper.find(Heading).length).toBe(0);
  });
  it("Should return valid amp-html", async () => {
    const component = (
      <Layout story={textStory} config={config}>
        <RelatedStories stories={relatedStories} />
      </Layout>
    );
    const ampHtml = renderToString(component);
    if (ampHtml instanceof Error) throw ampHtml;
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
