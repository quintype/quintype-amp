// delivery\.vidible\.tv\/htmlembed\/pid=([^$]*)\/([^$]*).html\?vid=([^$]*)
import React from "react";
import { StoryElementProps } from "../types";
import { O2PlayerTypes } from "../../o2-player/types";
import { O2Player } from "../../o2-player";

type VidibleElementProps = StoryElementProps & Omit<O2PlayerTypes, "data-pid" | "data-bcid" | "data-vid">;

interface VidibleIds {
  pid: string;
  bcid: string;
  vid: string;
}

export const getVidibleIDs = (url: string) => {
  const match = /delivery\.vidible\.tv\/htmlembed\/pid=([^$]*)\/([^$]*).html\?vid=([^$]*)/.exec(url);
  return match ? { pid: match[1], bcid: match[2], vid: match[3] } : null;
};

const VidibleElement = ({
  element,
  layout = "responsive",
  width = "16",
  height = "9",
  "data-macros": dataMacros,
  ...props
}: VidibleElementProps) => {
  const { metadata } = element;
  let vidibleIds: VidibleIds | null = null;

  if (metadata && metadata["player-url"]) {
    vidibleIds = getVidibleIDs(metadata["player-url"]);
  }
  return vidibleIds ? (
    <O2Player
      data-pid={vidibleIds.pid}
      data-bcid={vidibleIds.bcid}
      data-vid={vidibleIds.vid}
      data-macros={dataMacros ? dataMacros : "m.playback=click"}
      layout={layout}
      width={width}
      height={height}
      {...props}
    />
  ) : null;
};

export { VidibleElement };
