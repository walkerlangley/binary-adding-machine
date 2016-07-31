import React, { Component } from 'react';
import Addend1 from './components/addend';

class App extends Component {

  constructor() {
    super();
    this.state = {
      addend1: {
        zero: 0,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0
      },
      addend2: {
        zero: 0,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0
      },
      carry: {
        zero: 0,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0
      },
      sum: {
        zero: 0,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0
      }
    }

  }

  renderBinary2(obj) {
    let binary2Value = {
      display: "inline-block",
      width: "10%",
      border: "1px solid black",
      padding: "10px 0px"
    }

    return (
      <div className="Binary2-Value" style={binary2Value}>{obj[Object.keys(obj)]}</div>
    )
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

    let Binary1 = {
      display: "block",
      border: "3px solid blue",
      textAlign: "center",
      margin: "10px 0px"
    }

    let Binary2 = {
      display: "block",
      border: "3px solid green",
      textAlign: "center",
      margin: "10px 0px"
    }

    let keyStyle = {
      display: "inline-block",
      width: "10%",
      border: "1px solid black",
      padding: "10px 0px"
    }

    let binary1Value = {
      display: "inline-block",
      width: "10%",
      border: "1px solid black",
      padding: "10px 0px"
    }

    let binary2Value = {
      display: "inline-block",
      width: "10%",
      border: "1px solid black",
      padding: "10px 0px"
    }


    const { addend1, addend2 } = this.state;

    return (
      <div className="Addends" style={addendStyle}>
        <div className="BinaryKeys" style={BinaryKeys}>
          <Addend
            values={addend1}
            />
        </div>
        <div className="Binary1" style={Binary1}>
          {binary1.map((val, index) => {
            return (
              <div className="Binary1-Value" style={binary1Value}>
                <input
                  type="text"
                  defaultValue={val}
                  onChange={(e) => {
                    this.setState({
                      binary1[index]: e.target.value;
                    })
                  })}
                />
              </div>
            )
          })}
        </div>
        <div className="Binary2" style={Binary2}>
          {binary2.map((val, index) => {
            return (
              <div className="Binary2-Value" style={binary2Value}>
                <input
                  type="text"
                  defaultValue={val}
                  //onChange={(e) => {
                  //  this.setState({
                  //    binary2[index]: e.target.value;
                  //  })
                  //})}
                />
            </div>
            )})
          }}
        </div>
      </div>
    )
  }
}

export default App
