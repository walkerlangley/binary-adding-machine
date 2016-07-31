import React, { Component } from 'react'
import Bit from './bit'

class Adder extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { values, onChange } = this.props;

    let Binary1 = {
      display: "block",
      border: "3px solid blue",
      textAlign: "center",
      margin: "10px 0px"
    }

    return(
      <div className="addend1" style={Binary1}>
        {Object.keys(values).map((key, i) => {
          const id={key}
          const value = values[key]
          return (
            <Bit
              key={i}
              prop={id}
              value={value}
              onChange={onChange.bind(this, id)}
            />
          )
        })}
    </div>
    )
  }
}

export default Adder;
