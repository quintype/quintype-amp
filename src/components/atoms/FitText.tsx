import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import * as atomTypes from '../../type-declarations/atomicComponents'

const FitText = (props: atomTypes.FitText) => {
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

export default FitText
