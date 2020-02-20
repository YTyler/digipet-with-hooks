import React, { useState } from 'react';

const makeColorPicker = () => {
  const colors = ['#a9cbe8','red','pink','teal'];
  return () => {
    const color = colors.pop();
    colors.unshift(color);
    return color;
  }
}

const getColor = makeColorPicker();
const alsoGetColor = makeColorPicker();

function RightControl(props) {

  const [btnClr, setBtnClr] = useState('#a9cbe8');
  const [btnClr2, setBtnClr2] = useState('#a9cbe8');

  const rightControlStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: '5px',
    padding: '8px',
  }

  const selectStyle = {
    backgroundColor: btnClr
  };

  const selectStyle2 = {
    backgroundColor: btnClr2
  };

  const clicker = () => {
    props.select();
    setBtnClr(getColor());
  }

  const clicker2 = () => {
    props.changeView(0)
    setBtnClr2(alsoGetColor());
  }


  return (
    <div style={rightControlStyle}>
      <button onClick={clicker} style={selectStyle}>SELECT</button>
      <button onClick={clicker2} style={selectStyle2}>HOME</button>
    </div>
  );
}

export default RightControl;
