import React, { useState } from 'react';
import But from './But'

function Header() {

  const [changeColor, setChangeColor] = useState(true);

  const headerStyle = {
    textAlign: 'center',
    height: '300px',
    overflow: 'hidden',
    backgroundColor: (changeColor) ? 'rgba(100,100,100,.93)' : 'black'
  };
  const imgStyle = {
    marginTop: '50px',
    height: '200px'
  }

  return (
    <div style={headerStyle}>
      <img src="/logo.png" alt="Logo" style={imgStyle}/>
      <But setChangeColor={setChangeColor}/>
    </div>
  );
}

export default Header;
