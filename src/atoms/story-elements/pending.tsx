import React from "react";
import { StoryElementProps } from "./types";

const Pending = ({ element }: StoryElementProps) => (
  <div style={{ backgroundColor: "tomato", color: "white", fontSize: "18px", fontFamily: "monospace" }}>
    This element is pending implementation
    <div>
      Type: {element.type} <br />
      Subtype: {element.subtype}
    </div>
  </div>
);

export { Pending };
