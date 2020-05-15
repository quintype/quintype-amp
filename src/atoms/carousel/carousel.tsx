import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { CarouselTypes } from "./types";
import { LightboxGallery } from "../lightbox-gallery";

export const Carousel = (props: CarouselTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-carousel"
          src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"
        />
      </Helmet>
      {props.lightbox && <LightboxGallery />}
      <amp-carousel {...props}>{props.children}</amp-carousel>
    </Fragment>
  );
};
