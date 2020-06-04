import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { SlotType } from "../../types/config";
import { parse } from "node-html-parser";
import styled from "styled-components";

const StyledSlot = styled.div.attrs(({ inlineStyles }: StyledSlotTypes) => ({
  style: inlineStyles
}))<StyledSlotTypes>``;

export interface StyledSlotTypes {
  inlineStyles?: object;
}
export const Slot = ({ ampHtml, script, styles, inlineStyles }: SlotType) => {
  const headScript = getHeadScript(script);
  return (
    <Fragment>
      <Helmet>
        {headScript}
        {styles && <style>{styles}</style>}
      </Helmet>
      <StyledSlot inlineStyles={inlineStyles} dangerouslySetInnerHTML={{ __html: ampHtml }} />
    </Fragment>
  );
};

function getHeadScript(script) {
  if (!script) return null;
  let root;
  root = parse(script);
  return root.querySelectorAll("script").map((el, i) => {
    const attrs = el.attributes;
    return <script key={i} {...attrs} />;
  });
}
