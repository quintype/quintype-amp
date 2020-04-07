import { ReactElement } from "react";

export interface AdTypes {
  width: string | number;
  height: string | number;
  children?: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
  [key: string]: any;
}
