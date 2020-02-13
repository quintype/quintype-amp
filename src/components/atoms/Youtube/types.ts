import { ReactElement } from 'react'
import { Common } from '../commonTypes'

export interface YoutubeTypes extends Common {
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
