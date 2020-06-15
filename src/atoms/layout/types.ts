import { ReactElement } from "react";
import { Story } from "../../types/story";
import { Config } from "../../types/config";

export interface Layout {
  children: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
  style?: { [key: string]: string };
  story: Story;
  config: Config;
  inlineStyles?: object;
}
