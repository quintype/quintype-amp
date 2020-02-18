import React from 'react'
import { Blurb } from './types'
import { AppContext } from '../../../helper-functions'
import styled from 'styled-components'

const StyledBlurb = styled.blockquote`
  color: red;
  background-color: purple;
`
// const StyledBlurb2 = styled.blockquote`
//   color: green;
//   background-color: grey;
// `

const AmpBlurb = (props: Blurb) => (
  <AppContext.Consumer>
    {appContext => {
      return appContext.ignoreDefaultStyles ?
        <blockquote className="amp-se-blurb">{props.children}</blockquote> :
        <StyledBlurb>{props.children}</StyledBlurb>
    }}
  </AppContext.Consumer>
)

export default AmpBlurb
