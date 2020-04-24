import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Author } from "./author";
import { config, textStory } from "../../__fixtures__";
import { Layout } from "../layout";

const singleAuthor = [
  {
    name: "Bruce Wayne",
    id: 1,
    slug: "/wayne",
    "avatar-url": "",
    "avatar-s3-key": null,
    "twitter-handle": null,
    bio: null,
    "contributor-role": null
  }
];
const twoAuthors = [
  {
    name: "Alfred Pennyworth",
    id: 2,
    slug: "/pennyworth",
    "avatar-url": "",
    "avatar-s3-key": null,
    "twitter-handle": null,
    bio: null,
    "contributor-role": null
  },
  {
    name: "Selena Kyle",
    id: 3,
    slug: "/kyle",
    "avatar-url": "",
    "avatar-s3-key": null,
    "twitter-handle": null,
    bio: null,
    "contributor-role": null
  }
];
const multipleAuthors = [...singleAuthor, ...twoAuthors];

storiesOf("Author", module)
  .addDecorator((story) => (
    <Layout story={textStory} config={config}>
      {story()}
    </Layout>
  ))
  .add("With one author", () => <Author authors={singleAuthor} />)
  .add("With two authors", () => <Author authors={twoAuthors} />)
  .add("With multiple authors", () => <Author authors={multipleAuthors} />)
  .add("With prepend text", () => <Author authors={multipleAuthors} prepend="By" />)
  .add("With prepend image/icon", () => (
    <Author authors={multipleAuthors} prepend={<img src="https://placehold.it/32x32" />} />
  ))
  .add("With custom style", () => {
    const customStyles: any = {};
    customStyles.author = (theme) => ({
      "font-weight": "normal",
      color: `${theme.color.primaryColor}`,
      "background-color": `${theme.color.mono4}`
    });
    return <Author authors={twoAuthors} style={customStyles} />;
  })
  .add("With custom theme and custom style", () => {
    const customStyles: any = {};
    customStyles.author = (theme) => ({
      color: `${theme.color.primaryColor}`,
      "background-color": `${theme.color.mono4}`
    });
    return (
      <Author
        authors={twoAuthors}
        style={customStyles}
        theme={{
          color: {
            primaryColor: "yellow",
            mono4: "purple"
          }
        }}
      />
    );
  });
