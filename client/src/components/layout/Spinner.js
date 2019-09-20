import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt="loading..."
        style={{
          width: '200px',
          margin: 'auto',
          display: 'block',
          position: 'relative',
          top: '200px'
        }}
      />
    </>
  );
};

export default Spinner;
