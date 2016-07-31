import React, { PropTypes } from 'react'
import Radium from 'radium'

const Bit = (props) => {

  let binary1Value = {
    display: "inline-block",
    width: "10%",
    border: "1px solid black",
    padding: "10px 0px"
  }

  let inputStyle = {
    base: {
      fontSize: "1.5em",
      border: "none",
      background: "transparent",
      height: "100px",
      textAlign: "center",

      ':focus': {
        outline: "none",
        background: "transparent",
        border: "none"
      },

      input: {
        textAlign: "center"
      }
    }
  }

  return (
    <div className="input" style={binary1Value}>
      <div>{props.value}</div>
  </div>
  )
}

export default Radium(Bit);
