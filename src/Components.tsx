import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import * as types from './type-declarations/components'

const Image = (props: types.Image) => {
  return <amp-img {...props}></amp-img>
}

const Title = (props: types.Title) => {
  return (
    <Helmet>
      <title>{props.children}</title>
    </Helmet>
  )
}

const Carousel = (props: types.Carousel) => {
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

const FitText = (props: types.FitText) => {
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

const Youtube = (props: types.Youtube) => {
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

const Amp = {Image, Title, Carousel, FitText, Youtube}
export default Amp