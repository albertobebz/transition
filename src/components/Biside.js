import React from "react"
import styled from "styled-components"

const WrapperBiside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Biside = props => {
  return (
    <WrapperBiside>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea
        assumenda quae voluptate minus pariatur ipsum quibusdam? Quos voluptatum
        commodi necessitatibus velit, ea numquam. Fugiat impedit ea voluptatibus
        unde molestiae?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        excepturi at, suscipit optio corporis esse ex nulla ipsa aperiam ad
        veritatis aliquam debitis ut obcaecati facilis. Sunt cumque asperiores
        nesciunt?
      </div>
    </WrapperBiside>
  )
}

export default Biside
