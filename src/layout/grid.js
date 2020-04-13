import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  justify-content: center;

  @media (max-width: 600px) {
    padding-left: 0px;
  }
`

const Grid = props => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        paddingLeft: "20px",
        justifyContent: "center",
      }}
    >
      {props.children}
    </div>
  )
}

export default Grid
