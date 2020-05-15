/**
 * @jest-environment node
 */

import React from "react";
import { RelatedStories, RelatedStoriesBase, Heading } from "./related-stories";
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
    const wrapper = shallow(<RelatedStoriesBase config={config} stories={relatedStories} />);
    expect(wrapper.find(Heading).text()).toBe("Also Read");
  });
  it("should not render if no stories are passed", () => {
    const wrapper = shallow(<RelatedStoriesBase config={config} stories={[]} />);
    expect(wrapper.find(Heading).exists()).toBeFalsy();
  });
  it("Should return valid amp-html", async () => {
    const Component = () => (
      <Layout story={textStory} config={config}>
        <Link rel="canonical" href="." />
        <RelatedStories stories={relatedStories} />
      </Layout>
    );
    const ampHtml = renderToString(<Component />);
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
