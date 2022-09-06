import React from "react";
import { canTakeCard } from "./visual-story";
import { visualStory, config } from "../../__fixtures__";
import { shallow } from "enzyme";
import { VisualStory } from "./visual-story";

describe("canTakeCard helper function", () => {
  it("should filter out cards not containing valid story elements", () => {
    expect(visualStory.cards.map((card) => canTakeCard(card))).toStrictEqual([true, true, false, true, true, true]);
  });
});

describe("visual story template", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<VisualStory story={visualStory} config={config} />);
    expect(wrapper).toMatchSnapshot();
  });
});
