import React from "react";
import { Question, QuestionBase } from "./question";
import { shallow } from "enzyme";
import { config, textStory } from "../../../../__fixtures__";

const sampleQuestionElement = {
  id: "1",
  type: "text",
  subtype: "question",
  text: "<p><strong>You have a patient on Rikers who is older than ninety?</strong></p>"
};

describe("Question", () => {
  it("should render Question element", () => {
    const wrapper = shallow(<Question element={sampleQuestionElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should call questionElementRender prop when passed to opts", () => {
    const questionElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { render: { storyElementRender: { questionElementRender } } } };
    const wrapper = shallow(<QuestionBase element={sampleQuestionElement} story={textStory} config={modifiedConfig} />);
    expect(questionElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find("p").length).toBe(0);
  });
});
