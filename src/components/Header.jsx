import React from 'react';

function Header() {

  const headerStyle = {
    textAlign: 'center',
    height: '300px',
    overflow: 'hidden',
    backgroundColor: 'rgba(100,100,100,.93)'
  };
  const imgStyle = {
    marginTop: '50px',
    height: '200px'
  }

  return (
    <div style={headerStyle}>
      <img src="/logo.png" alt="Logo" style={imgStyle}/>
    </div>
  );
}

export default Header;
