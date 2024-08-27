import { StoryElementProps } from "../types";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

export const EbookBase = ({ element, story, config }: StoryElementProps) => {
  const ebookRender = get(config, ["opts", "render", "storyElementRender", "ebookRender"], null);

  return ebookRender ? ebookRender({ story, config, element }) : null;
};

/**
 * Ebook is a story element.
 * The look of the Ebook can be changed using the render prop ebookRender. In case ebookRender is passed in the config, it is rendered. Otherwise nothing is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *  render: {
 *    storyElementRender: {
 *      ebookRender: ({ story, config, element }) => <MyCustomEbook story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Ebook
 * @component
 */
export const Ebook = withStoryAndConfig(EbookBase);
