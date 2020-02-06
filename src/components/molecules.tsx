import React, { Fragment } from 'react'
// import { Image, Title } from './atoms'
import * as moleculeTypes from '../type-declarations/molecularComponents'
import styled from 'styled-components'

// these are default styles
const StyledBlurb = styled.blockquote`
  color: red;
  background-color: purple;
`
const StyledBlockQuote = styled.div`
  color: cyan;
  margin: 5px solid purple;
  padding: 3rem;
`

const AmpBlurb = (props: moleculeTypes.Blurb) => {
  return (
    <Fragment>
      <StyledBlurb>{props.children}</StyledBlurb>
    </Fragment>
  )
}
const AmpBlockQuote = (props: any) => {
  return (
    <Fragment>
      <StyledBlockQuote>{props.children}</StyledBlockQuote>
    </Fragment>
  )
}

export const StoryElements = { AmpBlurb, AmpBlockQuote }
