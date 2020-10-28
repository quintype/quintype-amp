import React from "react";
import { VisualDefault } from "../visual-default";
import { VisualImage } from "../visual-image";
import { VisualText } from "../visual-text";
import { VisualVideo } from "../visual-video";
import get from "lodash/get";
import { StoryElement } from "../story-elements/story-element";


// function getRelevantTemplate(storyElement, story, config) {
//     const type =
//         get(storyElement, ["type"], "") === "external-file"
//             ? get(storyElement, ["file-type"], "")
//             : get(storyElement, ["type"], "");
//     switch (type) {
//         case "text":
//             return <VisualText element={storyElement} />;
//         case "title":
//             return <VisualText element={storyElement} />;
//         case "video":
//             return <VisualVideo element={storyElement} />;
//         case "image":
//             return <VisualImage story={story} aspectRatio={[16, 9]} />;
//         default:
//             return <VisualDefault />;
//     }
// };

export const VisualStoryCards = ({ story }) => {
    return story.cards.map((card) => {
        return <amp-story-page key={card.id}>
            {card["story-elements"].map((element) => (
                <StoryElement key={element.id} element={element} />
            ))}
            <VisualDefault />
            <VisualText element={story} />
        </amp-story-page>;
    })
};
