import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import * as atomTypes from '../../type-declarations/atomicComponents'

const Youtube = (props: atomTypes.Youtube) => {
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

export default Youtube
