import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";
import { storyWithManyJsEmbeds, config } from "../../__fixtures__";
import Layout from "../layout";

storiesOf("Footer", module)
  .addDecorator((story) => (
    <Layout config={config} story={storyWithManyJsEmbeds}>
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
  ));
