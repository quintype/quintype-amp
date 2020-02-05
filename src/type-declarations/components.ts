import {Common} from './common'
import { ReactElement } from 'react'


export interface Carousel extends Common {
  type: "slides"|"carousel";
  id?: string;
  controls?: boolean;
  "data-next-button-aria-label"?: string;
  "data-prev-button-aria-label"?: string;
  "data-button-count-format"?: string;
  autoplay?: boolean|string;
  delay?: string;
  loop?: boolean;
  slide?: string;
  children?: JSX.Element[] | JSX.Element | ReactElement;
}

export interface Youtube extends Common {
  // https://developers.google.com/youtube/player_parameters
  autoplay?: boolean;
  loop?: boolean;
  "data-videoid"?: string;
  "data-live-channelid"?: string;
  "data-param-cc_lang_pref"?: string;
  "data-param-cc_load_policy"?: string;
  "data-param-color"?: string;
  "data-param-controls"?: string;
  "data-param-disablekb"?: string;
  "data-param-enablejsapi"?: string;
  "data-param-end"?: string;
  "data-param-fs"?: string;
  "data-param-modestbranding"?: string;
  "data-param-playlist"?: string;
  "data-param-start"?: string;
  children?: JSX.Element[] | JSX.Element | ReactElement;
}

export interface Image extends Common {
  src?: string;
  srcset?: string;
  alt?: string;
  attribution?: string;
}

export interface FitText extends Common {
  "min-font-size"?: string;
  "max-font-size"?: string;
  children?: JSX.Element[] | JSX.Element | ReactElement;
}

export interface Title {
  children: string|HTMLElement; // check if HTMLElement can be present here
}