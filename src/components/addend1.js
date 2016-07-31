import React, { Component } from 'react'
import Bit from './bit'

class Adder extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { values, decimalVal, onChange } = this.props;
    let i;

    let Binary1 = {
      display: "block",
      textAlign: "center",
      margin: "10px 0px"
    }

    let decimalValStyle = {
      display: "inline-block"
    }

    let len = values.length-1;
    var indents = []

    for(i = len; i >= 0; i--) {
      indents.push(
        <Bit
          key={i}
          value={values[i]}
          onChange={onChange.bind(this, i)}
          />
      )
    }

    return (
      <div className="addend1" style={Binary1}>
        {indents}
        <div className="decimalVal_addend1" style={decimalValStyle}>
          {decimalVal}
        </div>
      </div>
    )
  }
}

export default Adder;
