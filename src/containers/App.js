import React, { Component } from 'react';
import Addend1 from '../components/addend1';
import Addend2 from '../components/addend2';
import Sum from '../components/sum';

import update from 'react-addons-update';

class App extends Component {

  constructor() {
    super();
    this.state = {
      addend1: {
        seven: 0,
        six: 0,
        five: 0,
        four: 0,
        three: 0,
        two: 0,
        one: 0,
        zero: 0
      },
      addend2: {
        seven: 0,
        six: 0,
        five: 0,
        four: 0,
        three: 0,
        two: 0,
        one: 0,
        zero: 0
      },
      carry: {
        seven: 0,
        six: 0,
        five: 0,
        four: 0,
        three: 0,
        two: 0,
        one: 0,
        zero: 0
      },
      sum: {
        eight: 0,
        seven: 0,
        six: 0,
        five: 0,
        four: 0,
        three: 0,
        two: 0,
        one: 0,
        zero: 0
      },
    }
  }

  addend1Change(index, e) {

    let { value } = e.target;
    let val = parseInt(value, 10);
    let add2Value = this.state.addend2[index.key];
    let a2val = parseInt(add2Value, 10);
    let carryOver = this.state.carry[index.key];
    let co = parseInt(carryOver, 10);
    let nextSum = 0;
    let sumVal = 0;
    let carry = 0;
    let carryIndex="";
    let eightVal = 0;

    switch(index.key) {
      case "zero":
        carryIndex = "one"
        break;
      case "one":
        carryIndex = "two"
        break;
      case "two":
        carryIndex = "three"
        break;
      case "three":
        carryIndex = "four"
        break;
      case "four":
        carryIndex = "five"
        break;
      case "five":
        carryIndex = "six"
        break;
      case "six":
        carryIndex = "seven"
        break;
    }

    if(index.key === 'seven') {
      if(val === 1 && a2val === 1) {
        if(co === 1) {
          sumVal = 1
        } else {
          sumVal = 0;
          eightVal = 1;
        }
      } else if (val === 1 || a2val === 1) {
        if(co === 1) {
          sumVal = 0;
          eightVal = 1
        } else {
          sumVal = 1;
          carry = 0;
        }
      } else {
        if(co === 1) {
          sumVal = 1;
        } else {
          sumVal = 0;
        }
      }
    }

    if(val === 1 && a2val === 1) {
      if(co === 1) {
        sumVal = 1;
        carry = 1;
        nextSum = 1;
      } else {
        sumVal = 0;
        carry = 1;
        nextSum = 1;
      }
    } else if (val === 1 || a2val === 1) {
      if(co === 1) {
        sumVal = 0;
        carry = 1;
        nextSum = 1;
      } else {
        sumVal = 1;
        carry = 0;
      }
    } else {
      if(co === 1) {
        sumVal === 1
      } else {
        sumVal = 0;
      }
    }

    let newState = update(this.state, {
      addend1:{
        [index.key]: {$set: val}
      },
      carry: {
        [carryIndex]: {$set: carry}
      },
      sum: {
        [index.key]: {$set: sumVal},
        [carryIndex]: {$set: nextSum},
        eight: {$set: eightVal}
      }
    })

    console.log('NewState', newState);
    this.setState(newState);
  }

  addend2Change(index, e) {

    let { value } = e.target;
    let val = parseInt(value, 10);
    let add1Value = this.state.addend1[index.key];
    let a1val = parseInt(add1Value, 10);
    let carryOver = this.state.carry[index.key];
    let co = parseInt(carryOver, 10);
    let nextSum = 0;
    let sumVal = 0;
    let carry = 0;
    let carryIndex="";
    let eightVal = 0;
    let carryVal = 0;

    console.log('CO', co);


    switch(index.key) {
      case "zero":
        carryIndex = "one"
        break;
      case "one":
        carryIndex = "two"
        break;
      case "two":
        carryIndex = "three"
        break;
      case "three":
        carryIndex = "four"
        break;
      case "four":
        carryIndex = "five"
        break;
      case "five":
        carryIndex = "six"
        break;
      case "six":
        carryIndex = "seven"
        break;
    }

    if(index.key === 'seven') {
      if(val === 1 && a1val === 1) {
        if(co === 1) {
          sumVal = 1
        } else {
          sumVal = 0;
          eightVal = 1;
        }
      } else if (val === 1 || a1val === 1) {
        if(co === 1) {
          sumVal = 0;
          eightVal = 1
        } else {
          sumVal = 1;
          carry = 0;
        }
      } else {
        if(co === 1) {
          sumVal = 1;
        } else {
          sumVal = 0;
        }
      }
    }

    if(val === 1 && a1val === 1) {
      if(co === 1) {
        sumVal = 1;
        carry = 1;
        nextSum = 1;
      } else {
        sumVal = 0;
        carry = 1;
        nextSum = 1;
      }
    } else if (val === 1 || a1val === 1) {
      if(co === 1) {
        sumVal = 0;
        carry = 1;
        nextSum = 1;
      } else {
        sumVal = 1;
        carry = 0;
      }
    } else {
      if(co === 1) {
        sumVal === 1
      } else {
        sumVal = 0;
      }
    }

    let newState = update(this.state, {
      addend2: {
        [index.key]: {$set: val}
      },
      carry: {
        [carryIndex]: {$set: carry}
      },
      sum: {
        [index.key]: {$set: sumVal},
        [carryIndex]: {$set: nextSum},
        eight: {$set: eightVal}
      }
    })

    this.setState(newState);
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
