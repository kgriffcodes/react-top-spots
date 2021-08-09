import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from '../components/topspot';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.data)
      .then((topspots) => this.setState({ topspots }));
  }

  render() {
    const { topspots } = this.state;
    return (
      <div className='App'>
        <div className='container'>
          <h1>San Diego Top Spots</h1>
          <h3>A list of the top 30 places to see in San Diego, California.</h3>
          { topspots.map(({ id, title, body }) => (
            <TopSpot
              key={ id }
              name={ title }
              description={ body }
              location={ id }
            />
          )) }
        </div>
      </div>
    );
  }
}

export default App;
