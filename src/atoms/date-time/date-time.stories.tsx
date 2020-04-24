import * as React from "react";
import { storiesOf } from "@storybook/react";
import { DateTime } from "./date-time";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../layout";

storiesOf("DateTime", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("With date", () => <DateTime dateTime={1579162728583} />)
  .add("With date and time", () => <DateTime dateTime={1579162728583} showTime={true} />)
  .add("With custom date format", () => <DateTime dateTime={1579162728583} formatString="dd MMMM yyyy" />)
  .add("With custom style", () => {
    const customStyles: any = {};
    customStyles.wrapper = (theme) => ({
      color: `${theme.color.primaryColor}`,
      "background-color": `${theme.color.mono4}`
    });
    return <DateTime dateTime={1579162728583} style={customStyles} />;
  })
  .add("With custom style and theme", () => {
    const customStyles: any = {};
    customStyles.wrapper = (theme) => ({
      color: `${theme.color.primaryColor}`,
      "background-color": `${theme.color.mono4}`
    });
    return (
      <DateTime
        dateTime={1579162728583}
        style={customStyles}
        theme={{ color: { primaryColor: "green", mono4: "pink" } }}
      />
    );
  });
