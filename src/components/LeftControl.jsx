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
      <button onClick={() => {props.upDown(1)}}>Up</button>
      <button onClick={() => {props.upDown(-1)}}>Down</button>
    </div>
  );
}

export default LeftControl;
