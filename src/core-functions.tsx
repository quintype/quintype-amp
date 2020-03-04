import React from "react";
import { headStart, headEndBodyStart, bodyEnd } from "./boilerplate";
import { getHeadTags, getHtmlAndDefaultStyles } from "./helper-functions";
import Layout from "./atoms/layout";
import { AmpifyStoryTypes } from "./types/core-function-types";
import HeroImage from "./molecules/hero-image";

// const checkLayout = () => {
//   // this should perform checks to decide whether the layout (i.e. stuff inside the accumulator) is fit for
//   // rendering into an amp page or not, else it should return an error object with a proper message
//   return accumulator.title ? null : new Error('Title is mandatory. It is not set')
// }

export function renderToString(component) {
  // check if layout can be rendered (i.e. if title and stuff is present), else throw error
  let str = "";
  try {
    // const check = checkLayout()
    // if (check instanceof Error) throw check
    const { title, script, customStyles } = getHeadTags();
    const { htmlStr, defaultStyles } = getHtmlAndDefaultStyles(component);

    str += headStart;
    str += `${title}${script}`;
    str += customStyles || defaultStyles;
    str += headEndBodyStart;
    str += htmlStr;
    str += bodyEnd;
    return str;
  } catch (e) {
    return e;
  }
}

export function ampifyTextStory({ story, config }: AmpifyStoryTypes) {
  // returns ready-to-render amp html. Intended to be used by publishers who donot need customizations
  // mimics platform amp
  const layout = (
    <Layout story={story} config={config}>
      <div>THIS IS AMPIFIED TEXT STORY!!!</div>
      <HeroImage />
    </Layout>
  );
  return renderToString(layout);
}
