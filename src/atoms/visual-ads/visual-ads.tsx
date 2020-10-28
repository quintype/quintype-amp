import React, { Fragment } from "react";
import get from "lodash/get";
import cloneDeep from "lodash.clonedeep";
import Helmet from "react-helmet";

export const VisualAds = ({ config, adName }) => {
    const clone = cloneDeep(config);
    const adPropsFromConfig = get(clone, ["ampConfig", "doubleclick", adName], null);
    const unitPath = get(adPropsFromConfig, "unit-path", null);

    const adJson = {
        "ad-attributes": {
            type: "doubleclick",
            "data-slot": unitPath
        }
    };

    return <Fragment>
        <Helmet>
            <script async={undefined} custom-element="amp-story-auto-ads"
                src="https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js" />
        </Helmet>
        <amp-story-auto-ads>
            <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(adJson) }} />
        </amp-story-auto-ads>
    </Fragment>
};
