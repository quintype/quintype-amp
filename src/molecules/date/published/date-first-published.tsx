import React from "react";
import { withStoryAndConfig } from "../../../context";
import { DatePublishedTypes } from "./types";
import { DatePublishedBase } from "./date-published-base";

export const DateFirstPublishedBase = ({ story, format, prepend, config }: DatePublishedTypes) => {
  return <DatePublishedBase story={story} format={format} prepend={prepend} config={config} type="first" />;
};

/**
 * DateFirstPublished Component - uses library "date-fns-tz" to format the story publish date. Uses the "DateTime" atomic component internally
 *
 * ```js
 * <DateFirstPublished format="pp 'on' do MM yyyy" prepend="Date of publication: " />
 * ```
 *
 * @param {Object} props Object containing parameters passed to the render prop
 * @param {String|Component} props.prepend Optional. String or Component (logo) that is prepended
 * @param {String} props.format Optional. String that is used to format date. The default is "do MMM, yyyy 'at' p". For formatting info, check [the date-fns Docs]{@link https://date-fns.org/docs/format}
 *
 *  @category Molecules
 * @component
 */

export const DateFirstPublished = withStoryAndConfig(DateFirstPublishedBase);
