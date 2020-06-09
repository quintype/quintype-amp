import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { CarouselTypes } from "./types";
import { LightboxGallery } from "../lightbox-gallery";
import styled from "styled-components";

export const StyledCarousel = styled.div.attrs(({ inlineStyles }: StyledCarouselTypes) => ({
  style: inlineStyles
}))<StyledCarouselTypes>``;
export interface StyledCarouselTypes {
  inlineStyles?: object;
}
export const Carousel = (props, { inlineStyles }: CarouselTypes) => {
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
      <StyledCarousel inlineStyles={inlineStyles}>
        <amp-carousel {...props}>{props.children}</amp-carousel>
      </StyledCarousel>
    </Fragment>
  );
};
