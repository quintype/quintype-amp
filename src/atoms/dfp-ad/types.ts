import { ReactElement } from "react";

export interface DfpAdTypes {
  width: number;
  height: number;
  "data-slot": string;
  children?: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
}
