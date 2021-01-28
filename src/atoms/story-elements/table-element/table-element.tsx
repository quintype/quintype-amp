import React from "react";
import { StoryElementProps } from "../types";
import { withStoryAndConfig } from "../../../context";
import { CsvTable } from "./csv-table";
import get from "lodash.get";

export const TableElementBase = (props: StoryElementProps) => {
  const tableElementRender = get(props, ["config", "opts", "render", "storyElementRender", "tableElementRender"], null);
  if (tableElementRender) return tableElementRender(props);

  const tableContentType = props.element.data?.["content-type"];
  if (!tableContentType) return null;

  switch (tableContentType) {
    case "csv":
      return <CsvTable {...props} />;
    default:
      return null;
  }
};

/**
 * TableElement is a story element.
 * The look of the TableElement can be changed using the render prop tableElementRender. In case tableElementRender is passed in the config, it is rendered. Otherwise a default TableElement is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    tableElementRender: ({ story, config, element }) => <MyCustomTableElement story={story} config={config} storyElement={element} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module TableElement
 * @component
 */

export const TableElement = withStoryAndConfig(TableElementBase);
