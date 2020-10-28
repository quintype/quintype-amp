import React from "react";

export const VisualText = ({ element }) => {

    return (
        <amp-story-grid-layer template="thirds">
            <div grid-area="middle-third">
                <p dangerouslySetInnerHTML={{ __html: element.text }} />
            </div>
        </amp-story-grid-layer>
    );
}
