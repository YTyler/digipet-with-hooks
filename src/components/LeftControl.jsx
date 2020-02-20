import React from 'react';

function LeftControl(props) {
  const leftControlStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: '5px',
    padding: '8px',
  }


  return (
    <div style={leftControlStyle }>
      <button onClick={() => {props.upDown(-1)}}>UP</button>
      <button onClick={() => {props.upDown(1)}}>DOWN</button>
    </div>
  );
}

export default LeftControl;
