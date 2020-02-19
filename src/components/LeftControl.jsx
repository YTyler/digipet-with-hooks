import React from 'react';

function LeftControl() {
  const leftControlStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: '5px',
    padding: '8px',
  }
  return (
    <div style={leftControlStyle }>
      <button>Up</button>
      <button>Down</button>
    </div>
  );
}

export default LeftControl;
