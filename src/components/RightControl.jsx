import React from 'react';

function RightControl(props) {
  const rightControlStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: '5px',
    padding: '8px',
  }

  const aButton = () => {
    console.log('A');
  }

  const bButton = () => {
    console.log('B');
  }

  return (
    <div style={rightControlStyle}>
      <button onClick={aButton}>A</button>
      <button onClick={bButton}>B</button>
    </div>
  );
}

export default RightControl;
