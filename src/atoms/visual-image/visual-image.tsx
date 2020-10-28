import React from "react";

export const VisualImage = ({ story, config }) => {
    const imageUrl = story["image-s3-key"] || story["hero-image-s3-key"];
    const imageAlt = story["hero-image-attribution"] || story["hero-image-caption"];
    return (
        <amp-story-grid-layer template="fill">
            <amp-img
                alt={imageAlt}
                width="480"
                height="360"
                layout="responsive"
                src={`//${config.publisherConfig["cdn-image"]}/${imageUrl}`}
            />
        </amp-story-grid-layer>
    );
}
