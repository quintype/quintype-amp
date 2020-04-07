import { Text, BlockQuote, Pending, ImageElement, Blurb } from "../../atoms/story-elements";

const anyType = "any";
const none = "none";

const StoryElementsTable = [
  ["composite", "image-gallery", Pending],
  ["composite", "ingredients", Pending],
  ["composite", "playlist", Pending],
  ["composite", "references", Pending],
  ["data", "table", Pending],
  ["external-file", "bitgravity-video", Pending],
  ["external-file", "brightcove-video", Pending],
  ["external-file", "jwplayer", Pending],
  ["external-file", "vod-video", Pending],
  ["external-file", anyType, Pending],
  ["file", "attachment", Pending],
  ["image", none, ImageElement],
  ["jsembed", "avmm-vidible-video", Pending],
  ["jsembed", "dailymotion-video", Pending],
  ["jsembed", "dilmot-q-and-a", Pending],
  ["jsembed", "facebook-post", Pending],
  ["jsembed", "facebook-video", Pending],
  ["jsembed", "instagram", Pending],
  ["jsembed", "social-media", Pending],
  ["jsembed", "tweet", Pending],
  ["jsembed", "vidible-video", Pending],
  ["jsembed", anyType, Pending],
  ["polltype", "opinion-poll", Pending],
  ["soundcloud-audio", none, Pending],
  ["text", "also-read", Pending],
  ["text", "answer", Pending],
  ["text", "bigfact", Text],
  ["text", "blockquote", BlockQuote],
  ["text", "blurb", Blurb],
  ["text", "q-and-a", Text],
  ["text", "question", Pending],
  ["text", "quote", BlockQuote],
  ["text", "summary", Text],
  ["text", anyType, Text],
  ["title", none, Text],
  ["youtube-video", none, Pending],
  [anyType, anyType, Pending]
];

function matchStoryElement(element, table = StoryElementsTable) {
  const { type, subtype } = element;

  // @ts-ignore
  const [matchedType, matchedSubtype, component] =
    // @ts-ignore
    table.find(([expectedType, expectedSubtype, value]) => {
      if (type === expectedType && subtype === expectedSubtype) {
        return true;
      }

      if (type === expectedType && (subtype === null || subtype === undefined) && expectedSubtype === none) {
        return true;
      }

      if (type === expectedType && expectedSubtype === anyType) {
        return true;
      }

      if (expectedType === anyType && expectedSubtype === anyType) {
        return true;
      }

      return false;
    }) || [];

  return component;
}

export { matchStoryElement };
