import React, { Component } from 'react';
import Addend1 from '../components/addend1';
import Addend2 from '../components/addend2';
import Sum from '../components/sum';

import update from 'react-addons-update';

class App extends Component {

  constructor() {
    super();
    this.state = {
      addend1: [0,0,0,0,0,0,0,0],
      addend2: [0,0,0,0,0,0,0,0],
      carry: [0],
      sum: [0,0,0,0,0,0,0,0],
      base10_1: 0,
      base10_2: 0,
      sum10: 0
    }
  }

  addend1Change(index, e) {
    let { value } = e.target;
    let val = parseInt(value, 10);
    let newState = this.state.addend1.slice(0,index).concat(val).concat(this.state.addend1.slice(index+1));
    let addend2 = this.state.addend2;
    let newSum=[];
    let decimal1=0;
    let binSum=0;
    let i;
    let j;
    let k;
    let l;

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

    console.log('newState', newState);
    console.log('newSum', newSum);

    for (k = 0; k < newState.length ; k++) {
      decimal1 += newState[k] * Math.pow(2, k)
    }

    for (l = 0; l < newSum.length-1; l++) {
      binSum += newSum[l] * Math.pow(2, l)
      console.log('binSum', binSum, '\n');
    }

    this.setState({
      addend1: newState,
      sum: newSum,
      base10_1: decimal1,
      sum10: binSum
    });
  }

  addend2Change(index, e) {
    let { value } = e.target;
    let val = parseInt(value, 10);
    let newState = this.state.addend2.slice(0,index).concat(val).concat(this.state.addend2.slice(index+1));
    let addend1 = this.state.addend1;
    let newSum = [];
    let decimal2=0;
    let binSum=0;
    let i;
    let j;
    let k;
    let l;


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

    for (k = 0; k < newState.length ; k++) {
      decimal2 += newState[k] * Math.pow(2, k)
    }

    for (l = 0; l < newSum.length-1; l++) {
      binSum += newSum[l] * Math.pow(2, l)
    }

    this.setState({
      addend2: newState,
      sum: newSum,
      base10_2: decimal2,
      sum10: binSum
    });
  }

  render() {
    let addendStyle = {
      display: "block",
      border: "3px solid black",
      textAlign: "center",
      marginTop: "200px"
    }

    let BinaryKeys = {
      display: "block",
      textAlign: "center",
      margin: "20px 0px"
    }

    let sumStyle = {
      margin: "20px 0px"
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
      </div>
        <hr></hr>
        <div className="Sum" style={sumStyle}>
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
