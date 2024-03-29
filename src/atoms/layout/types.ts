import { ReactElement } from "react";
import { Story } from "../../types/story";
import { Config } from "../../types/config";

export interface Layout {
  children: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
  story: Story;
  config: Config;
}
