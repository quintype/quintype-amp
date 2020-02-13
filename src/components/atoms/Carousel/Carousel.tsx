import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { CarouselTypes } from './types'

const Carousel = (props: CarouselTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"></script>
        <meta name="lorem ipsum" content="carousel script added" />
      </Helmet>
      <amp-carousel {...props}>{props.children}</amp-carousel>
    </Fragment>
  )
}

export default Carousel
