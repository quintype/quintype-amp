import { ReactElement } from "react";
import { Story } from "../../types/story";

export interface Layout {
  children: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
  style?: { [key: string]: string };
  story: Story;
}
