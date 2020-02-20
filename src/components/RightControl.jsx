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
      <button onClick={() => {props.select()}}>SELECT</button>
      <button onClick={() => {props.changeView(0)}}>HOME</button>
    </div>
  );
}

export default RightControl;
