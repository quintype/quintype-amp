import { StoryElement } from "../../atoms";

const anyType = "any";
const none = "none";

const StoryElementsTable = [
  ["composite", "image-gallery", StoryElement.Pending],
  ["composite", "ingredients", StoryElement.Pending],
  ["composite", "playlist", StoryElement.Pending],
  ["composite", "references", StoryElement.Pending],
  ["data", "table", StoryElement.Pending],
  ["external-file", "bitgravity-video", StoryElement.Pending],
  ["external-file", "brightcove-video", StoryElement.Pending],
  ["external-file", "jwplayer", StoryElement.Pending],
  ["external-file", "vod-video", StoryElement.Pending],
  ["external-file", anyType, StoryElement.Pending],
  ["file", "attachment", StoryElement.Pending],
  ["image", none, StoryElement.Pending],
  ["jsembed", "avmm-vidible-video", StoryElement.Pending],
  ["jsembed", "dailymotion-video", StoryElement.Pending],
  ["jsembed", "dilmot-q-and-a", StoryElement.Pending],
  ["jsembed", "facebook-post", StoryElement.Pending],
  ["jsembed", "facebook-video", StoryElement.Pending],
  ["jsembed", "instagram", StoryElement.Pending],
  ["jsembed", "social-media", StoryElement.Pending],
  ["jsembed", "tweet", StoryElement.Pending],
  ["jsembed", "vidible-video", StoryElement.Pending],
  ["jsembed", anyType, StoryElement.Pending],
  ["polltype", "opinion-poll", StoryElement.Pending],
  ["soundcloud-audio", none, StoryElement.Pending],
  ["text", "also-read", StoryElement.Pending],
  ["text", "answer", StoryElement.Pending],
  ["text", "bigfact", StoryElement.Text],
  ["text", "blockquote", StoryElement.Text],
  ["text", "blurb", StoryElement.Text],
  ["text", "q-and-a", StoryElement.Text],
  ["text", "question", StoryElement.Pending],
  ["text", "quote", StoryElement.Text],
  ["text", "summary", StoryElement.Text],
  ["text", anyType, StoryElement.Text],
  ["title", none, StoryElement.Text],
  ["youtube-video", none, StoryElement.Pending],
  [anyType, anyType, StoryElement.Pending]
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
