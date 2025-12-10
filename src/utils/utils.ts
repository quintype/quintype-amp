export function getVideoElement(card) {
  return card["story-elements"].find(
    (el) => el.type === "jsembed" || (el.type === "video" && el.subtype === "video-clip")
  );
}

export const decodeB64 = (b64Code) => {
  try {
    return decodeURI(Buffer.from(b64Code, "base64").toString());
  } catch (err) {
    console.error("Failed to decode base 64 code ", err);
    return null;
  }
};

export const isBase64 = (str) => {
  if (!str || typeof str !== "string") return false;

  try {
    return btoa(atob(str)) === str;
  } catch (e) {
    return false;
  }
};
