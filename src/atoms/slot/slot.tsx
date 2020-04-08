import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { SlotTypes } from "./types";

export const Slot = ({ ampHtml, script, styles }: SlotTypes) => {
  return (
    <Fragment>
      <Helmet>
        {script}
        {styles}
      </Helmet>
      <div dangerouslySetInnerHTML={createMarkup(ampHtml)} />
    </Fragment>
  );
};

function createMarkup(ampHtml) {
  return { __html: ampHtml };
}
