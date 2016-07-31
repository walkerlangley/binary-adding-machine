import React, { Component } from 'react';
import Addend1 from '../components/addend1';
import Addend2 from '../components/addend2';
import Sum from '../components/sum';

import update from 'react-addons-update';

class App extends Component {

  constructor() {
    super();
    this.state = {
      addend1: [0,0,0,0,0,0,0],
      addend2: [0,0,0,0,0,0,0],
      carry: [0,0,0,0,0,0,0],
      sum: [0,0,0,0,0,0,0],
    }
  }

  addend1Change(index, e) {
  }

  addend2Change(index, e) {
    }

  render() {
    let addendStyle = {
      display: "block",
      border: "3px solid black",
      textAlign: "center"
    }

    let BinaryKeys = {
      display: "block",
      border: "3px solid red",
      textAlign: "center",
      margin: "10px 0px"
    }

    const { addend1, addend2, sum } = this.state;

    return (
      <div className="Addends" style={addendStyle}>
        <div className="BinaryKeys" style={BinaryKeys}>
          <Addend1
            values={addend1}
            onChange={this.addend1Change.bind(this)}
          />
          {/*<Addend2
            values={addend2}
            onChange={this.addend2Change.bind(this)}
          />
          <Sum
            addend1={addend1}
            addend2={addend2}
            values={sum}
          />*/}
        </div>
      </div>
    )
  }
}

export default App
