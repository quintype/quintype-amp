import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { CarouselTypes } from "./types";
import styled, { css, withTheme } from "styled-components";
import get from "lodash.get";
import { genStyles } from "../../helpers/gen-styles";

const baseCarousel = css`
  background-color: ${(props) => props.theme.color.mono4};
`;

const CarouselBase = ({ style, theme, ...props }: CarouselTypes) => {
  const carouselStyles = get(style, "carousel", null);
  const StyledCarousel = styled.div`
    ${genStyles(baseCarousel, carouselStyles, theme)}
  `;
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-carousel"
          src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"
        />
      </Helmet>
      <StyledCarousel>
        <amp-carousel {...props}>{props.children}</amp-carousel>
      </StyledCarousel>
    </Fragment>
  );
};

export const Carousel = withTheme(CarouselBase);
