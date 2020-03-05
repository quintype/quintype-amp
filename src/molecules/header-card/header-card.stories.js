import * as React from "react";
import { storiesOf } from "@storybook/react";
import { HeaderCard } from "./header-card";
import { Layout } from "../../atoms";
import { textStory, config } from "../../__fixtures__";

storiesOf("Header Card", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("default", () => <HeaderCard />);
