import React from "react"
import styled from "styled-components"

import SideNav from "./SideNav"

const WrapperContainer = styled.div`
  display: flex;
`

const WrapperContainerWithSideNav = props => {
  return (
    <WrapperContainer>
      <SideNav />
      {props.children}
    </WrapperContainer>
  )
}

export default WrapperContainerWithSideNav
