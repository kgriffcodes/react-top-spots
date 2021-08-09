import React from 'react';

const TopSpot = (props) => (
  <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
  </div>
);

export default TopSpot;
