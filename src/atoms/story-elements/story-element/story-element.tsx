import React, { Fragment } from "react";
import { matchStoryElement } from "../../../helpers/match-story-element";
import { Spacer } from "../../spacer";
import { Helmet } from "react-helmet";

export const StoryElement = ({ setInvalidBanner, element, ...props }) => {
  const Component = matchStoryElement(element);
  if (!Component) {
    setInvalidBanner();
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
      <Component element={element} {...props} />
      <Spacer token="s" />
    </Fragment>
  );
};
