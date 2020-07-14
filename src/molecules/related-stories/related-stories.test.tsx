/**
 * @jest-environment node
 */

import React from "react";
import { RelatedStories, RelatedStoriesBase, Heading } from "./related-stories";
import { shallow } from "enzyme";
import { renderToString } from "../../helpers";
import { Layout, Head } from "../../atoms";
import { isValidAmpHtml } from "../../utils/validate-amp";
import { config, relatedStories, textStory } from "../../__fixtures__";

describe("RelatedStories", () => {
  it("should render default", () => {
    const wrapper = shallow(<RelatedStories stories={relatedStories} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render if valid related stories are passed", () => {
    const wrapper = shallow(<RelatedStoriesBase story={textStory} config={config} stories={relatedStories} />);
    expect(wrapper.find(Heading).text()).toBe("Also Read");
  });
  it("should not render if no related stories are passed", () => {
    const wrapper = shallow(<RelatedStoriesBase story={textStory} config={config} stories={[]} />);
    expect(wrapper.find(Heading).exists()).toBeFalsy();
  });
  it("should call relatedStoriesRender when passed", () => {
    const relatedStoriesRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { relatedStoriesRender } } };
    const wrapper = shallow(<RelatedStoriesBase story={textStory} config={modifiedConfig} stories={relatedStories} />);
    expect(relatedStoriesRender.mock.calls.length).toBe(1);
    expect(wrapper.find(RelatedStories).length).toBe(0);
  });
  it("Should return valid amp-html", async () => {
    const Component = () => (
      <Layout story={textStory} config={config}>
        <Head>
          <link rel="canonical" href="." />
        </Head>
        <RelatedStories stories={relatedStories} />
      </Layout>
    );
    const ampHtml = renderToString(<Component />);
    const ampValidatorOutput = await isValidAmpHtml(ampHtml);
    expect(ampValidatorOutput).toBe(true);
  });
});
