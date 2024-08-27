import { StoryElementProps } from "../types";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

export const ReferencesBase = ({ element, story, config }: StoryElementProps) => {
  const referencesRender = get(config, ["opts", "render", "storyElementRender", "referencesRender"], null);

  return referencesRender ? referencesRender({ story, config, element }) : null;
};

/**
 * References is a story element.
 * The look of the References can be changed using the render prop referencesRender. In case referencesRender is passed in the config, it is rendered. Otherwise nothing is rendered.
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
 *      referencesRender: ({ story, config, element }) => <MyCustomReferences story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module References
 * @component
 */
export const References = withStoryAndConfig(ReferencesBase);
