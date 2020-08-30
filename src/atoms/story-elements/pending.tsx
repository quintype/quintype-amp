import React from "react";
import { StoryElementProps } from "./types";
import styled from "styled-components";

export const StyledPending = styled.div`
  background-color: "tomato";
  color: "white";
  font-size: "18px";
  font-family: "monospace";
`;
const Pending = ({ element }: StoryElementProps) => (
  <StyledPending>
    This element is pending implementation
    <div>
      Type: {element.type} <br />
      Subtype: {element.subtype}
    </div>
  </StyledPending>
);

export { Pending };
