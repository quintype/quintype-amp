import React from "react";
import { Helmet } from "react-helmet";

export const LightboxGallery = () => {
  // to be used alongwith amp-carousel or amp-img. Doesn't accept children or props
  // usage: add attribute "lightbox" on amp-img or amp-carousel
  return (
    <Helmet>
      <script
        async={undefined}
        custom-element="amp-lightbox-gallery"
        src="https://cdn.ampproject.org/v0/amp-lightbox-gallery-1.0.js"
      />
    </Helmet>
  );
};
