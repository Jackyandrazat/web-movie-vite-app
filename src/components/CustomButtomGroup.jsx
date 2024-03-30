/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function CustomButtonGroup({ next, previous }) {
  return (
    <div>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default CustomButtonGroup;
