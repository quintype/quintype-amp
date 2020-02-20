import React from 'react'
import styled from 'styled-components'
import {FullWidthHeightAnchorTypes} from './types'

const StyledFullWidthHeightAnchor = styled.a`
  width: 100%;
  height: 100%;
  display: block;
`

const FullWidthHeightAnchor = (props: FullWidthHeightAnchorTypes) => {
  const {href, children, target} = props
  return (
    <StyledFullWidthHeightAnchor
      href={href}
      target={target || "_self"}
      rel="noreferrer noopener"
    >
      {children}
    </StyledFullWidthHeightAnchor>
  )
}

export default FullWidthHeightAnchor
