import React from 'react';

function RightControl(props) {
  const rightControlStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: '5px',
    padding: '8px',
  }

  return (
    <div style={rightControlStyle}>
      <button>A</button>
      <button>B</button>
    </div>
  );
}

export default RightControl;
