import React from "react";
import get from "lodash/get";

export const Bookend = ({ story }) => {
    const storyId = get(story, ["id"], "");
    const sectionId = get(story, ["sections", 0, "id"], "");
    return <amp-story-bookend src={`/amp/story/${storyId}/bookend.json?section=${sectionId}`} layout="nodisplay" />;
}
