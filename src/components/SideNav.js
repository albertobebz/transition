import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const SideNavWrapper = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100vh;

  li {
    list-style-type: none;
  }
`

const SideNav = props => {
  return (
    <SideNavWrapper>
      <ul>
        <li>
          <Link to="/biside">Biside</Link>
        </li>
        <li>
          <Link to="/terms">Terms</Link>
        </li>
        <li>
          <Link to="/rules">Rules</Link>
        </li>
      </ul>
    </SideNavWrapper>
  )
}

export default SideNav
