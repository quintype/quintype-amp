import React from 'react'
import styled from 'styled-components'
import { HeaderLogoTypes, StyledHeaderLogoTypes } from './types'
import FullWidthHeightAnchor from '../../atoms/full-width-height-anchor'

const StyledHeaderLogo = styled.h2`
  height: 50px;
  width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: contain;
  background-position: center center;
  background: transparent no-repeat url(${(props: StyledHeaderLogoTypes) => props.logoSrc});
  margin: 0;
  ${(props: any) => props.logoStyles};
`

const HeaderLogo = (props: HeaderLogoTypes) => {
  return (
    <StyledHeaderLogo {...props}>
      <FullWidthHeightAnchor href="/" />
    </StyledHeaderLogo>
  )
}

export default HeaderLogo