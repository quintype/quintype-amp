import React from 'react'
import * as moleculeTypes from '../../type-declarations/molecularComponents'
import { AppContext } from '../Layout'
import styled from 'styled-components'

const StyledBlurb = styled.blockquote`
  color: red;
  background-color: purple;
`

const AmpBlurb = (props: moleculeTypes.Blurb) => (
  <AppContext.Consumer>
    {appContext => {
      return appContext.ignoreDefaultStyles ?
        <blockquote className="amp-se-blurb">{props.children}</blockquote> :
        <StyledBlurb>{props.children}</StyledBlurb>
    }}
  </AppContext.Consumer>
)

export default AmpBlurb
