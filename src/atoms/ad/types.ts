import { ReactElement } from "react";

export interface AdTypes {
  type: string;
  width: string | number;
  height: string | number;
  children?: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
  adProps?: any;
  [key: string]: any;
}
