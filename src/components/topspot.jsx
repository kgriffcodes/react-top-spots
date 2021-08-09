import React from 'react';

function TopSpot(props) {
  const lat = props.location[0];
  const lon = props.location[1];
  const url = `https://maps.google.com/?q=${lat},${lon}`;

  return (
    <div className='well p-4 m-3'>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <a target="_blank" href={ url } className='btn btn-primary buttons p-2'>
        Check it out on Google Maps
      </a>
    </div>
)};

export default TopSpot;
