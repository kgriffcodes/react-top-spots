import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentDidMount() {
    axios
      .get('https://codepen.io/merobertsjr/pen/WayqqB.js')
      .then((response) => response.data)
      .then((topspots) => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <h1>San Diego Top Spots</h1>
        <h3>A list of the top 30 places to see in San Diego, California.</h3>
        <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre>
      </div>
    );
  }
}

export default App;
