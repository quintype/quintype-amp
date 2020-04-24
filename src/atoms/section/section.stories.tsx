import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Section } from "./section";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../layout";

const section = {
  "domain-slug": null,
  slug: "news",
  name: "News",
  "section-url": "https://www.barandbench.com/news",
  id: 14017,
  "parent-id": null,
  "display-name": "News Of the World",
  collection: {
    slug: "news",
    name: "News",
    id: 29911
  },
  data: null
};

const sectionWithoutDisplayName = { ...section, "display-name": "" };

storiesOf("Section", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default section", () => <Section section={section} />)
  .add("With display name", () => <Section section={section} />)
  .add("Without display name", () => <Section section={sectionWithoutDisplayName} />)
  .add("Section with custom styles", () => {
    const customStyles: any = {};
    customStyles.wrapper = (theme) => ({
      "background-color": `${theme.color.mono4}`,
      "font-size": `${theme.font.size.jumbo}`
    });
    return <Section section={section} style={customStyles} />;
  })
  .add("Section with custom styles and theme", () => {
    const customStyles: any = {};
    customStyles.wrapper = (theme) => ({
      "background-color": `${theme.color.mono4}`,
      "font-size": `${theme.font.size.jumbo}`
    });
    return (
      <Section
        section={section}
        style={customStyles}
        theme={{ color: { mono4: "green" }, font: { size: { jumbo: "100px" } } }}
      />
    );
  });
