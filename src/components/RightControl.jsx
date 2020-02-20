import React, { useState } from 'react';

const makeColorPicker = () => {
  const colors = ['white','#a9cbe8'];
  return () => {
    const color = colors.pop();
    colors.unshift(color);
    return color;
  }
}

const getColor = makeColorPicker();
const alsoGetColor = makeColorPicker();

function RightControl(props) {

  const [btnClr, setBtnClr] = useState('white');
  const [btnClr2, setBtnClr2] = useState('white');

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
    setTimeout(function(){ setBtnClr(getColor()); }, 100);

  }

  const clicker2 = () => {
    props.changeView(0)
    setBtnClr2(alsoGetColor());
    setTimeout(function(){ setBtnClr2(alsoGetColor()); }, 100);
  }


  return (
    <div style={rightControlStyle}>
      <button onClick={clicker} style={selectStyle}>SELECT</button>
      <button onClick={clicker2} style={selectStyle2}>HOME</button>
    </div>
  );
}

export default RightControl;
