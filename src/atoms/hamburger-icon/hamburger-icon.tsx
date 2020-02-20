import React from 'react'
import styled from 'styled-components'
import { HamburgerIconTypes, StyledIconTypes } from './types'

const StyledLines = styled.div`
  height: 2px;
  width: 100%;
  background-color: black;
`

const StyledLines2 = styled(StyledLines)`
  margin-top: 8px;
`

const StyledIcon = styled.div`
  position: absolute;
  ${({isLeftAligned}: StyledIconTypes) => isLeftAligned ? "left: 0" : "right: 0"};
  width: 30px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
  margin: ${({isLeftAligned}: StyledIconTypes) => isLeftAligned ? "0 0 0 15px" : "0 15px 0 0"};
`

const HamburgerIcon = ({ isLeftAligned=true, callback }: HamburgerIconTypes) => {
  return (
    <StyledIcon isLeftAligned={isLeftAligned} onClick={callback}>
      <StyledLines />
      <StyledLines2 />
      <StyledLines2 />
    </StyledIcon>
  )
}

export default HamburgerIcon