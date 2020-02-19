import React from 'react';

function LeftControl() {
  const leftControlStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: '5px',
    padding: '8px',
  }

  const upButton = () => {
    console.log('up');
  }

  const downButton = () => {
    console.log('down');
  }

  return (
    <div style={leftControlStyle }>
      <button onClick={upButton}>Up</button>
      <button onClick={downButton}>Down</button>
    </div>
  );
}

export default LeftControl;
