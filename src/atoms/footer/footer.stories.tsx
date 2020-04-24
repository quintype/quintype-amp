import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Footer, BaseFooter } from "./footer";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../layout";

storiesOf("Footer", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("No Footer Text", () => <Footer />)
  .add("With Footer Text", () => (
    <Footer text="Copyright © 2020 Lorem Ipsum Media Private Limited. All Rights Reserved" />
  ))
  .add("With custom components", () => (
    <Footer>
      <p>This is a custom footer</p>
      <p>Powered by Quintype AMP</p>
    </Footer>
  ))
  .add("With custom style", () => {
    const customStyles: any = {};
    customStyles.footer = (theme) => ({
      backgroundColor: `${theme.color.primaryColor}`
    });
    return <Footer text="I'm a footer" style={customStyles} />;
  })
  .add("With custom style and custom theme", () => {
    const customStyles: any = {};
    customStyles.footer = (theme) => ({
      backgroundColor: `${theme.color.primaryColor}`
    });
    return (
      <BaseFooter
        text="I'm a footer"
        style={customStyles}
        theme={{
          color: {
            primaryColor: "pink"
          }
        }}
      />
    );
  });
