import { StoryElementProps } from "../types";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

const UnsupportedBase = ({ element, story, config }: StoryElementProps) => {
  const unsupportedElementRender = get(
    config,
    ["opts", "render", "storyElementRender", "unsupportedElementRender"],
    null
  );
  return unsupportedElementRender ? unsupportedElementRender({ story, config, element }) : null;
};

/**
 * Unsupported element is displayed as a fallback if no other matching story element is found for the type | subtype.
 * By default, if an element is unsupported, nothing is shown. However, the render prop unsupportedElementRender is passed, that will be shown
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
 *      unsupportedElementRender: ({ story, config, element }) => <MyCustomUnsupportedElement story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Title
 * @component
 */
export const Unsupported = withStoryAndConfig(UnsupportedBase);
