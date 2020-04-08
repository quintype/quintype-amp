import { Config } from "../../../types/config";
import { ReactElement } from "react";

export interface CommonDfpAdTypes {
  width: number;
  height: number;
  "data-slot": string;
  children?: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
  config: Config;
}
