import React from "react";
import { Text, TextBase } from "./text";
import { shallow } from "enzyme";
import { config, textStory } from "../../../__fixtures__";

const sampleTextElement = {
  id: "1",
  type: "text",
  subtype: null,
  text:
    "<p> It's a baby put a bird on it cliche DIY swag photo booth portland helvetica slow-carb sartorial affogato drinking vinegarwhatever. Microdosing dreamcatcher coloring book tousled tattooed. <a href='https://www.google.com/'>Search online</a> </p><p>Tumeric jianbing godard shaman lomo blog blue bottle cloud bread vaporware whatever vape drinking vinegar austinhashtag adaptogen. Post-ironic offal irony leggings brunch. Flexitarian hexagon banh mi, yuccie unicorn offal smallbatch af vice poke gluten-free brooklyn.</p><h2>Un ordered list</h2><p> baby put a bird on it cliche DIY swag photo booth portland helvetica slow-carb sartorial affogato drinking vinegarwhatever. Microdosing dreamcatcher coloring book tousled tattooed.</p><ul><li>One</li><li>Two</li><li>Three</li></ul><h3>Ordered List</h3><p> baby put a bird on it cliche DIY swag photo booth portland helvetica slow-carb sartorial affogato drinking vinegarwhatever. Microdosing dreamcatcher coloring book tousled tattooed.</p><ol><li>One</li><li>Two</li><li>Three</li></ol>"
};

describe("Text", () => {
  it("should render text", () => {
    const wrapper = shallow(<Text element={sampleTextElement} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render text and call storyElementRender prop when passed to opts", () => {
    const textElementRender = jest.fn();
    const modifiedConfig = { ...config, opts: { ...config.opts, storyElementRender: { textElementRender } } };
    const wrapper = shallow(<TextBase element={sampleTextElement} story={textStory} config={modifiedConfig} />);
    expect(textElementRender.mock.calls.length).toBe(1);
    expect(wrapper.find("p").length).toBe(0);
  });
});
