import { Config } from "../../../types/config";
import { ReactElement } from "react";

export interface CommonDfpAdTypes {
  config: Config;
  templateName: "default" | "liveBlog";
  width?: number;
  height?: number;
  "data-slot"?: string;
  children?: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
}
