import React from 'react'
import * as moleculeTypes from '../../type-declarations/molecularComponents'
import { AppContext } from '../Layout'
import styled from 'styled-components'

const StyledBlockQuote = styled.div`
  color: cyan;
  margin: 5px solid purple;
  padding: 3rem;
`
const AmpBlockQuote = (props: moleculeTypes.BlockQuote) => (
  <AppContext.Consumer>
    {appContext => (
      appContext.ignoreDefaultStyles ?
        <div className="amp-se-blockquote">{props.children}</div> :
        <StyledBlockQuote>{props.children}</StyledBlockQuote>
    )}
  </AppContext.Consumer>
)

export default AmpBlockQuote
