export function getVideoElement(card) {
  return card["story-elements"].find(
    (el) => el.type === "jsembed" || (el.type === "video" && el.subtype === "video-clip")
  );
}
