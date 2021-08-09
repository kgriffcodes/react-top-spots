import React from 'react';

const TopSpot = (props) => (
  <div className='well'>
    <h4>{props.title}</h4>
    <p>{props.body}</p>
  </div>
);

export default TopSpot;
