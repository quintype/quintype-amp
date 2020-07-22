// delivery\.vidible\.tv\/htmlembed\/pid=([^$]*)\/([^$]*).html\?vid=([^$]*)
import React from "react";
import { StoryElementProps } from "../types";
import { O2PlayerTypes } from "../../o2-player/types";
import { O2Player } from "../../o2-player";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";
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

export const DefaultVidibleElement = ({
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

export const VidibleElementBase = ({
  element,
  story,
  config,
  "data-macros": dataMacros
}: StoryElementProps & { "data-macros"?: string }) => {
  const vidibleElementRender = get(config, ["opts", "render", "storyElementRender", "vidibleElementRender"], null);
  const title = element.subtype || element.title || "";
  return vidibleElementRender ? (
    vidibleElementRender({ story, config, element })
  ) : (
    <DefaultVidibleElement element={element} title={title} data-macros={dataMacros} />
  );
};
/**
 * VidibleElement is a story element.
 * The look of the VidibleElement can be changed using the render prop vidibleElementRender. In case vidibleElementRender is passed in the config, it is rendered. Otherwise a default VidibleElement is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 * @param {Object} params.data-macros macros passed as data-macros to the amp component amp-o2-player
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    vidibleElementRender: ({ story, config, element }) => <MyCustomVidibleElement story={story} config={config} storyElement={element} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module VidibleElement
 * @component
 */
export const VidibleElement = withStoryAndConfig(VidibleElementBase);
