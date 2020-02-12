import React from 'react'
import { Helmet } from 'react-helmet'
import * as atomTypes from '../../type-declarations/atomicComponents'

const Title = (props: atomTypes.Title) => {
  return (
    <Helmet>
      <title>{props.children}</title>
    </Helmet>
  )
}

export default Title
