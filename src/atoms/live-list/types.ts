import { Story } from "../../types/story";

export interface LiveListTypes {
  story: Story;
  children: JSX.Element[] | JSX.Element | React.ReactChildren | React.ReactChild;
  "data-poll-interval"?: string;
  "data-max-items-per-page"?: string;
}

export interface LiveListAttrs {
  "data-poll-interval": string;
  "data-max-items-per-page": string;
  disabled?: string;
}
