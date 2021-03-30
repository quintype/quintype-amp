import {
  Text,
  Summary,
  Question,
  Answer,
  QAndA,
  Bigfact,
  BlockQuote,
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
  ImageGalleryElement,
  Attachment,
  TableElement
} from "../../atoms/story-elements";

const anyType = "any";
const none = "none";

const noop = () => null;

const StoryElementsTable = [
  ["composite", "image-gallery", ImageGalleryElement],
  ["composite", "ingredients", noop],
  ["composite", "playlist", noop],
  ["composite", "references", noop],
  ["data", "table", TableElement],
  ["external-file", "bitgravity-video", noop],
  ["external-file", "brightcove-video", noop],
  ["external-file", "jwplayer", noop],
  ["external-file", "vod-video", noop],
  ["external-file", anyType, noop],
  ["file", "attachment", Attachment],
  ["image", none, ImageElement],
  ["jsembed", "avmm-vidible-video", noop],
  ["jsembed", "dailymotion-video", DailyMotionElement],
  ["jsembed", "dilmot-q-and-a", noop],
  ["jsembed", "facebook-post", FacebookElement],
  ["jsembed", "facebook-video", FacebookElement],
  ["jsembed", "instagram", InstagramElement],
  ["jsembed", "social-media", noop],
  ["jsembed", "tweet", TwitterElement],
  ["jsembed", "vidible-video", VidibleElement],
  ["jsembed", anyType, Embed],
  ["polltype", "opinion-poll", noop],
  ["soundcloud-audio", none, noop],
  ["text", "also-read", AlsoRead],
  ["text", "answer", Answer],
  ["text", "bigfact", Bigfact],
  ["text", "blockquote", BlockQuote],
  ["text", "blurb", Blurb],
  ["text", "q-and-a", QAndA],
  ["text", "question", Question],
  ["text", "quote", BlockQuote],
  ["text", "summary", Summary],
  ["text", anyType, Text],
  ["title", none, Title],
  ["youtube-video", none, YouTube],
  [anyType, anyType, noop]
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
