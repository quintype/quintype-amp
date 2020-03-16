import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Author } from "./author";
import { config, textStory } from "../../__fixtures__";
import Layout from "../layout";

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
  .add("With multiple authors", () => <Author authors={multipleAuthors} />);
