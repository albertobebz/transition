import React from "react"
import Transition from "react-transition-group/Transition"
import styled from "styled-components"
import "./TermsAndConditionCSS.css"

const TermsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TermsAndCondition = props => {
  return (
    <Transition timeout={800} in={true} appear>
      {status => (
        <TermsWrapper className={`pageTransition-${status}`}>
          <div className={`textTransition-${status}`}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </div>
        </TermsWrapper>
      )}
    </Transition>
  )
}

export default TermsAndCondition
