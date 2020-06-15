import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { CarouselTypes } from "./types";
import { LightboxGallery } from "../lightbox-gallery";
import styled from "styled-components";

export const StyledCarousel = styled.div.attrs(({ style }: CarouselTypes & { style?: object }) => ({
  style: style
}))``;

export const Carousel = ({ inlineStyles, ...props }: CarouselTypes) => {
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
      <StyledCarousel style={inlineStyles}>
        <amp-carousel {...props}>{props.children}</amp-carousel>
      </StyledCarousel>
    </Fragment>
  );
};
