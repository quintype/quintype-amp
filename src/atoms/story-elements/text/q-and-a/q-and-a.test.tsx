import React from "react";
import { QAndA, QAndABase } from "./q-and-a";
import { shallow } from "enzyme";
import { config, textStory } from "../../../../__fixtures__";

const sampleQAndAElement = {
  description: "",
  "page-url": "/story/8c99ab25-1df2-4739-9bac-5b580ad5c337/element/022dbe70-c654-49f1-ab5b-bf5c9b80fd19",
  type: "text",
  "family-id": "bd3f685e-849a-49ad-b09c-ea7580b06f9d",
  title: "",
  id: "022dbe70-c654-49f1-ab5b-bf5c9b80fd19",
  metadata: {
    question: "<p>this is a q&amp;a element question</p>",
    answer: "<p>this is a q&amp;a element answer</p>"
  },
  subtype: "q-and-a",
  text:
    '<div><div class="question"><p>this is a q&amp;a element question</p></div><div class="answer"><p>this is a q&amp;a element answer</p></div></div>'
};

describe("QAndA", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<QAndA element={sampleQAndAElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should call qAndAElementRender prop when passed to opts", () => {
    const qAndAElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { storyElementRender: { qAndAElementRender } } } };
    const wrapper = shallow(<QAndABase element={sampleQAndAElement} story={textStory} config={modifiedConfig} />);
    expect(qAndAElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find("p").length).toBe(0);
  });
});
