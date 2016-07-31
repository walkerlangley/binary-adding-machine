import React, { Component } from 'react'
import SumBit from './sumBit'

class Sum extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { values, decimalVal } = this.props;
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
        <SumBit
          key={i}
          value={values[i]}
        />
      )
    }

    return(
      <div className="addend1" style={Binary1}>
        {indents}
        <div className="decimalVal_sum" style={decimalValStyle}>
          {decimalVal}
        </div>
      </div>
    )
  }
}

export default Sum;
