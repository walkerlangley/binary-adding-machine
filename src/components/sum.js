import React, { Component } from 'react'
import SumBit from './sumBit'

class Sum extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { addend1, addend2, values } = this.props;

    let Binary1 = {
      display: "block",
      border: "3px solid blue",
      textAlign: "center",
      margin: "10px 0px"
    }

    console.log();

    // let sum0 = parseInt(addend1.zero, 10) + parseInt(addend2.zero, 10);



    return(
      <div className="addend1" style={Binary1}>
        {Object.keys(values).map((key, i) => {
          const id={key}
          const value = values[key]
          return (
            <SumBit
              key={i}
              prop={id}
              value={value}
            />
          )
        })}
    </div>
    )
  }
}

export default Sum;
