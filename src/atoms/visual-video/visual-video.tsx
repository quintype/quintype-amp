import React, { Fragment } from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import getYouTubeID from "@rvgpl/get-youtube-id";

export const VisualVideo = ({ element }) => {
    const isYoutube = element.url.includes("youtube.com");
    let videoTemplate = (
        <amp-video
            autoplay=""
            loop=""
            width="720"
            height="1280"
            poster
            layout="responsive"
            src={get(element.url, "")}
        />
    );
    if (isYoutube) {
        const youtubeID = element.url && getYouTubeID(element.url);
        videoTemplate = (
            <Fragment>
                <Helmet>
                    <script async={undefined} custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js" />
                    <amp-youtube width="480" height="640" layout="responsive" autoplay="" data-videoid={youtubeID} />
                </Helmet>
            </Fragment>

        );
    }
    return <Fragment>
        <Helmet>
            <script async={undefined} custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js" />
        </Helmet>
        <amp-story-grid-layer template="fill">{videoTemplate}</amp-story-grid-layer>
    </Fragment>;
};
