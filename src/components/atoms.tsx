import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import * as atomTypes from '../type-declarations/atomicComponents'

export const Image = (props: atomTypes.Image) => {
  return <amp-img {...props}></amp-img>
}

export const Title = (props: atomTypes.Title) => {
  return (
    <Helmet>
      <title>{props.children}</title>
    </Helmet>
  )
}

export const Carousel = (props: atomTypes.Carousel) => {
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

export const FitText = (props: atomTypes.FitText) => {
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-fit-text" src="https://cdn.ampproject.org/v0/amp-fit-text-0.1.js"></script>
        <meta name="lorem ipsum" content="Fit Text script added" />
      </Helmet>
      <amp-fit-text {...props}>{props.children}</amp-fit-text>
    </Fragment>
  )
}

export const Youtube = (props: atomTypes.Youtube) => {
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
        <meta name="lorem ipsum" content="YOUTUBE script added" />
      </Helmet>
      <amp-youtube {...props}>{props.children}</amp-youtube>
    </Fragment>
  )
}

// const Amp = {Image, Title, Carousel, FitText, Youtube}
// export default Amp