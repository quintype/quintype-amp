import React from "react";
import get from "lodash/get";
import { withStory } from "../../context";
import { VisualImage } from "../visual-image";

const VisualHeaderCardBase = ({ story }) => {
    const headline = get(story, ["headline"], "");
    const authorName = get(story, ["authors", 0, "name"], "");

    return (
        <amp-story-page id="amp-story-cover">
            <VisualImage story={story} aspectRatio={[16, 9]} />
            <amp-story-grid-layer template="vertical" class="gradient">
                <div className="spacing">
                    <h1>{headline}</h1>
                    <p>{authorName}</p>
                </div>
            </amp-story-grid-layer>
        </amp-story-page>
    );
}

export const VisualHeaderCard = withStory(VisualHeaderCardBase);
