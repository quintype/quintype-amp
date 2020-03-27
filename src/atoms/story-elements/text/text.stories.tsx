import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Text } from "./text";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";

const sampleTextElement = {
  id: "1",
  type: "text",
  subtype: null,
  text:
    "<p> It's a baby put a bird on it cliche DIY swag photo booth portland helvetica slow-carb sartorial affogato drinking vinegarwhatever. Microdosing dreamcatcher coloring book tousled tattooed. <a href='www.google.com'>Search online</a> </p><p>Tumeric jianbing godard shaman lomo blog blue bottle cloud bread vaporware whatever vape drinking vinegar austinhashtag adaptogen. Post-ironic offal irony leggings brunch. Flexitarian hexagon banh mi, yuccie unicorn offal smallbatch af vice poke gluten-free brooklyn.</p><h2>Un ordered list</h2><p> baby put a bird on it cliche DIY swag photo booth portland helvetica slow-carb sartorial affogato drinking vinegarwhatever. Microdosing dreamcatcher coloring book tousled tattooed.</p><ul><li>One</li><li>Two</li><li>Three</li></ul><h3>Ordered List</h3><p> baby put a bird on it cliche DIY swag photo booth portland helvetica slow-carb sartorial affogato drinking vinegarwhatever. Microdosing dreamcatcher coloring book tousled tattooed.</p><ol><li>One</li><li>Two</li><li>Three</li></ol>"
};
const sampleSummaryElement = {
  id: "2",
  type: "text",
  subtype: "summary",
  text:
    "<p> It's a baby put a bird on it cliche DIY swag photo booth portland helvetica slow-carb sartorial affogato drinking vinegarwhatever. Microdosing dreamcatcher coloring book tousled tattooed. </p>"
};

storiesOf("Text", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Text", () => <Text element={sampleTextElement} />)
  .add("Text with external link", () => <Text element={sampleTextElement} externalLink={true} />)
  .add("Summary element", () => <Text element={sampleSummaryElement} />);
