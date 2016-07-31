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
      carry: [0],
      sum: [0,0,0,0,0,0,0],
    }
  }

  addend1Change(index, e) {
    let { value } = e.target;
    let val = parseInt(value, 10);
    let newState = this.state.addend1.slice(0,index).concat(val).concat(this.state.addend1.slice(index+1));
    let addend2 = this.state.addend2;
    let newSum=[];
    let i;
    let j;

    for(i = addend2.length-1; i>=0; i--) {
      newSum.push(newState[i] + addend2[i])
    }

    for(j = newSum.length-1; j>=0; j--) {
      if(j>0) {
        if(newSum[j] === 3) {
          newSum[j] = 1;
          newSum[j-1] = newSum[j-1]+1
        } else if (newSum[j] === 2) {
          newSum[j] = 0;
          newSum[j-1] = newSum[j-1] + 1
        } else {}
      } else {
        if(newSum[j] === 3) {
          newSum[j] = 1;
          newSum.unshift(1)
        } else if (newSum[j] === 2) {
          newSum[j] = 0
          newSum.unshift(1)
        } else {}
      }
    }


    this.setState({
      addend1: newState,
      sum: newSum
    });
  }

  addend2Change(index, e) {
    let { value } = e.target;
    let val = parseInt(value, 10);
    let newState = this.state.addend2.slice(0,index).concat(val).concat(this.state.addend2.slice(index+1));
    let addend1 = this.state.addend1;
    let newSum = [];
    let i;
    let j;

    for(i = addend1.length-1; i>=0; i--) {
      newSum.push(newState[i] + addend1[i])
    }

    for(j = newSum.length-1; j>=0; j--) {
      if(j>0) {
        if(newSum[j] === 3) {
          newSum[j] = 1;
          newSum[j-1] = newSum[j-1]+1
        } else if (newSum[j] === 2) {
          newSum[j] = 0;
          newSum[j-1] = newSum[j-1] + 1
        } else {}
      } else {
        if(newSum[j] === 3) {
          newSum[j] = 1;
          newSum.unshift(1)
        } else if (newSum[j] === 2) {
          newSum[j] = 0
          newSum.unshift(1)
        } else {}
      }
    }

    this.setState({
      addend2: newState,
      sum: newSum
    });
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
          <Addend2
            values={addend2}
            onChange={this.addend2Change.bind(this)}
          />
          <Sum
            addend1={addend1}
            addend2={addend2}
            values={sum}
          />
        </div>
      </div>
    )
  }
}

export default App
