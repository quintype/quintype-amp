import {
  Text,
  Summary,
  Question,
  Answer,
  Bigfact,
  BlockQuote,
  Pending,
  ImageElement,
  Blurb,
  AlsoRead,
  YouTube,
  Embed,
  DailyMotionElement,
  TwitterElement,
  FacebookElement,
  InstagramElement,
  VidibleElement,
  Title,
  ImageGalleryElement
} from "../../atoms/story-elements";

const anyType = "any";
const none = "none";

const noop = () => null;

const StoryElementsTable = [
  ["composite", "image-gallery", ImageGalleryElement],
  ["composite", "ingredients", noop],
  ["composite", "playlist", noop],
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
  ["jsembed", "dailymotion-video", DailyMotionElement],
  ["jsembed", "dilmot-q-and-a", Pending],
  ["jsembed", "facebook-post", FacebookElement],
  ["jsembed", "facebook-video", FacebookElement],
  ["jsembed", "instagram", InstagramElement],
  ["jsembed", "social-media", Pending],
  ["jsembed", "tweet", TwitterElement],
  ["jsembed", "vidible-video", VidibleElement],
  ["jsembed", anyType, Embed],
  ["polltype", "opinion-poll", Pending],
  ["soundcloud-audio", none, noop],
  ["text", "also-read", AlsoRead],
  ["text", "answer", Answer],
  ["text", "bigfact", Bigfact],
  ["text", "blockquote", BlockQuote],
  ["text", "blurb", Blurb],
  ["text", "q-and-a", Text],
  ["text", "question", Question],
  ["text", "quote", BlockQuote],
  ["text", "summary", Summary],
  ["text", anyType, Text],
  ["title", none, Title],
  ["youtube-video", none, YouTube],
  [anyType, anyType, null] // this has to be the last element in the array
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
