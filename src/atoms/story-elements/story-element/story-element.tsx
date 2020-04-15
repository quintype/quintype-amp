import React, { Fragment } from "react";
import { matchStoryElement } from "../../../helpers/match-story-element";
import { Spacer } from "../../spacer";
import { Helmet } from "react-helmet";

export const StoryElement = ({ setInvalidBanner, element, ...rest }) => {
  const Component = matchStoryElement(element);
  if (!Component) {
    setInvalidBanner();
    console.log(`Warning: element ${element.type} is invalid`);
    return (
      <Fragment>
        <Helmet>
          <meta name="invalid-elements-present" />
        </Helmet>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Component element={element} {...rest} />
      <Spacer token="s" />
    </Fragment>
  );
};
