import React from "react";
import { matchStoryElement } from "../../../helpers";
import { Spacer } from "../../spacer";

const StoryElement = (props) => {
  const { element } = props;
  const Component = matchStoryElement(element);
  return (
    <React.Fragment>
      <Component element={element} {...props} />
      <Spacer token="s" />
    </React.Fragment>
  );
};

export { StoryElement };
