import React from "react"

const Grid = props => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: "20px" }}>
      {props.children}
    </div>
  )
}

export default Grid
