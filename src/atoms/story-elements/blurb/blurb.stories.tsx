import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Blurb } from "./blurb";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";

const sampleBlurbElement = {
  description: "",
  "page-url": "/story/05066b94-784b-4913-971b-c01a1bcfb43d/element/19d96101-04b2-400a-ab95-e7362280d8a1",
  type: "text",
  "family-id": "5f761f27-4721-459f-8ecd-733021d8d2ea",
  title: "",
  id: "19d96101-04b2-400a-ab95-e7362280d8a1",
  metadata: {
    content:
      "In general—and this is a good P.S.A. reminder for everyone—if you are symptomatic, you are supposed to stay home for seven days, or three days past whenever your symptoms resolve, whichever one of those is longest."
  },
  subtype: "blurb",
  text:
    "<blockquote>In general—and this is a good P.S.A. reminder for everyone—if you are symptomatic, you are supposed to stay home for seven days, or three days past whenever your symptoms resolve, whichever one of those is longest.</blockquote>"
};

const { metadata, ...sampleBlurbElementWithoutMetadata } = sampleBlurbElement;

storiesOf("Blurb", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default blurb", () => <Blurb element={sampleBlurbElement} />)
  .add("Blurb without metadata", () => <Blurb element={sampleBlurbElementWithoutMetadata} />)
  .add("Blurb with children", () => {
    return (
      // <Blurb>
      <Blurb element={sampleBlurbElement}>
        <div>
          <h1>Lorem Ipsum</h1>
        </div>
        <div>Hello World</div>
      </Blurb>
    );
  })
  .add("Blurb with custom styles", () => {
    const customStyles: any = {};
    customStyles.blurb = (theme) => ({
      color: `${theme.color.accent1}`,
      "font-size": `${theme.font.size.m}`
    });
    return <Blurb element={sampleBlurbElement} style={customStyles} />;
  })
  .add("Blurb with custom styles and children", () => {
    const customStyles: any = {};
    customStyles.blurb = (theme) => ({
      color: `${theme.color.accent1}`,
      "font-size": `${theme.font.size.m}`
    });
    return (
      <Blurb element={sampleBlurbElement} style={customStyles}>
        <div>
          <h1>Lorem Ipsum</h1>
        </div>
        <div>Hello World</div>
      </Blurb>
    );
  })
  .add("Blurb with custom styles and custom theme", () => {
    const customStyles: any = {};
    customStyles.blurb = (theme) => ({
      color: `${theme.color.accent1}`,
      "font-size": `${theme.font.size.m}`
    });
    return (
      <Blurb
        element={sampleBlurbElement}
        style={customStyles}
        theme={{
          color: {
            accent1: "orange"
          },
          font: {
            size: {
              m: "32px"
            }
          }
        }}
      />
    );
  });
