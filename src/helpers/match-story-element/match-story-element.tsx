import { ElementType } from "react";
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
  TableElement,
  Unsupported,
  Brightcove,
  JwPlayer
} from "../../atoms/story-elements";

const anyType = "any";
const none = "none";

const storyElementsTable = [
  ["composite", "image-gallery", ImageGalleryElement],
  ["composite", "ingredients", Unsupported],
  ["composite", "playlist", Unsupported],
  ["composite", "references", Unsupported],
  ["data", "table", TableElement],
  ["external-file", "bitgravity-video", Unsupported],
  ["external-file", "brightcove-video", Brightcove],
  ["external-file", "jwplayer", JwPlayer],
  ["external-file", "vod-video", Unsupported],
  ["external-file", anyType, Unsupported],
  ["file", "attachment", Attachment],
  ["image", none, ImageElement],
  ["jsembed", "avmm-vidible-video", Unsupported],
  ["jsembed", "dailymotion-video", DailyMotionElement],
  ["jsembed", "dailymotion-embed-script", DailyMotionElement],
  ["jsembed", "dilmot-q-and-a", Unsupported],
  ["jsembed", "facebook-post", FacebookElement],
  ["jsembed", "facebook-video", FacebookElement],
  ["jsembed", "instagram", InstagramElement],
  ["jsembed", "social-media", Unsupported],
  ["jsembed", "tweet", TwitterElement],
  ["jsembed", "vidible-video", VidibleElement],
  ["jsembed", anyType, Embed],
  ["jsembed", "null", Embed],
  ["polltype", "opinion-poll", Unsupported],
  ["soundcloud-audio", none, Unsupported],
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
  [anyType, anyType, Unsupported]
];

export function matchStoryElement(element): ElementType {
  const { type, subtype } = element;

  // @ts-ignore
  const [matchedType, matchedSubtype, component]: [string, string, ElementType] =
    // @ts-ignore
    storyElementsTable.find(([expectedType, expectedSubtype, value]) => {
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
