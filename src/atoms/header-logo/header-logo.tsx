import React from 'react'
import styled from 'styled-components'
import { HeaderLogoTypes, StyledHeaderLogoTypes } from './types'

const StyledHeaderLogo = styled.img`
  height: 50px;
  width: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({styles}: StyledHeaderLogoTypes) => styles};
`

const HeaderLogo = ({logoSrc, logoStyles}: HeaderLogoTypes) => {
  return (
    <a href="/">
      <StyledHeaderLogo src={logoSrc} styles={logoStyles} />
    </a>
  )
}

export default HeaderLogo