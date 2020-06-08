import * as React from "react";
import { storiesOf } from "@storybook/react";
import { DateTime, StyledTimeWrapper } from "./date-time";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../../atoms";

storiesOf("Date Time", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("Default", () => <DateTime formattedDate="14 June 2017" />)
  .add("With prepend", () => <DateTime formattedDate="14 June 2017" prepend="Published: " />)
  .add("With custom styles", () => (
    <StyledTimeWrapper inlineStyles={{ "background-color": "blue" }}>
      <DateTime formattedDate="14 June 2017" prepend="Published: " />
    </StyledTimeWrapper>
  ));
