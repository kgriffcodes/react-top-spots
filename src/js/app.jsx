/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from '../components/Topspot';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentDidMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then((response) => response.data)
      .then((topspots) => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App container'>
        <div className='subContainer col-8 m-3 mx-auto text-center'>
          <h1>San Diego Top Spots</h1>
          <h3>A list of the top 30 places to see in San Diego, California.</h3>
          { this.state.topspots.map((topspot) => (
            <TopSpot
              key={ topspot.id }
              name={ topspot.name }
              description={ topspot.description }
              location={ topspot.location }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
