import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      binary1:  [
        {0: 0},
        {1: 0},
        {2: 0},
        {3: 0},
        {4: 0},
        {5: 0},
        {6: 0},
        {7: 0}
      ],
      binary2:  [
        {0: 0},
        {1: 0},
        {2: 0},
        {3: 0},
        {4: 0},
        {5: 0},
        {6: 0},
        {7: 0}
      ],
      sum: []
    };
  }

  renderBinary1(obj) {

    return (
      <div>
        <div>{obj[Object.keys(obj)]}</div>
        <div>{Object.keys(obj)}</div>
      </div>
    )
  }

  render() {
    const { binary1, binary2 } = this.state;
    return <div>{binary1.map(this.renderBinary1)}</div>
  }
}

export default App
