import { ReactElement } from "react";
import { Story } from "../../types/story";
import { Config } from "../../types/config";

export interface DfpAdTypes {
  width: number;
  height: number;
  "data-slot": string;
  story: Story;
  config: Config;
  children?: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
  inlineStyles?: object;
}

export interface StyledDfpAdTypes {
  style?: object;
}
