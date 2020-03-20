import { StoryElements } from "../../atoms";

const anyType = "any";
const none = "none";

const StoryElementsTable = [
  ["composite", "image-gallery", StoryElements.Pending],
  ["composite", "ingredients", StoryElements.Pending],
  ["composite", "playlist", StoryElements.Pending],
  ["composite", "references", StoryElements.Pending],
  ["data", "table", StoryElements.Pending],
  ["external-file", "bitgravity-video", StoryElements.Pending],
  ["external-file", "brightcove-video", StoryElements.Pending],
  ["external-file", "jwplayer", StoryElements.Pending],
  ["external-file", "vod-video", StoryElements.Pending],
  ["external-file", anyType, StoryElements.Pending],
  ["file", "attachment", StoryElements.Pending],
  ["image", none, StoryElements.Pending],
  ["jsembed", "avmm-vidible-video", StoryElements.Pending],
  ["jsembed", "dailymotion-video", StoryElements.Pending],
  ["jsembed", "dilmot-q-and-a", StoryElements.Pending],
  ["jsembed", "facebook-post", StoryElements.Pending],
  ["jsembed", "facebook-video", StoryElements.Pending],
  ["jsembed", "instagram", StoryElements.Pending],
  ["jsembed", "social-media", StoryElements.Pending],
  ["jsembed", "tweet", StoryElements.Pending],
  ["jsembed", "vidible-video", StoryElements.Pending],
  ["jsembed", anyType, StoryElements.Pending],
  ["polltype", "opinion-poll", StoryElements.Pending],
  ["soundcloud-audio", none, StoryElements.Pending],
  ["text", "also-read", StoryElements.Pending],
  ["text", "answer", StoryElements.Pending],
  ["text", "bigfact", StoryElements.Text],
  ["text", "blockquote", StoryElements.BlockQuote],
  ["text", "blurb", StoryElements.Text],
  ["text", "q-and-a", StoryElements.Text],
  ["text", "question", StoryElements.Pending],
  ["text", "quote", StoryElements.BlockQuote],
  ["text", "summary", StoryElements.Text],
  ["text", anyType, StoryElements.Text],
  ["title", none, StoryElements.Text],
  ["youtube-video", none, StoryElements.Pending],
  [anyType, anyType, StoryElements.Pending]
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
