import React from "react"
import styled from "styled-components"

const Image = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`
const Photos = props => {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        marginRight: "10px",
        marginTop: "10px",
      }}
    >
      <Image
        alt={props.image.urlName}
        src={`https:${props.image.image.file.url}`}
      />
    </div>
  )
}

export default Photos
