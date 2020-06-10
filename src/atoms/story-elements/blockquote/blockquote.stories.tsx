import * as React from "react";
import { storiesOf } from "@storybook/react";
import { BlockQuote } from "./blockquote";
import { config, textStory } from "../../../__fixtures__";
import { Layout } from "../../layout";

const sampleBlockQuoteElement = {
  id: "1",
  type: "text",
  subtype: null,
  text: "<div><blockquote>This is a blockquote</blockquote><span class='attribution'>Attribution</span></div>",
  metadata: {
    content:
      "People talk about jails and prisons being incubators for infection. How does that work exactly on Rikers?",
    attribution: "Attribution"
  }
};

const { metadata, ...sampleBlockQuoteElementWithoutMetadata } = sampleBlockQuoteElement;

storiesOf("BlockQuote", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default blockquote", () => <BlockQuote element={sampleBlockQuoteElement} />)
  .add("Blockquote without metadata", () => <BlockQuote element={sampleBlockQuoteElementWithoutMetadata} />)
  .add("With custom styles ", () => (
    <BlockQuote
      element={sampleBlockQuoteElement}
      wrapperInlineStyles={{ backgroundColor: "ccf" }}
      blockquoteInlineStyles={{ color: "red" }}
      attributionInlineStyles={{ fontStyle: "italic" }}
      fallbackInlineStyles={{ color: "blue" }}
    />
  ));
