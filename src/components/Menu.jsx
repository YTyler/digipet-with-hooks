import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const menuStyles = {
    backgroundColor: "rgb(202, 231, 241)",
    textAlign: 'center',
    padding: '20%',
    margin: '8px'
  }

  return (
    <div style={menuStyles}>
      <Link to='/game'><h2>GAME</h2></Link>
      <Link to='/feed'><h2>FEED</h2></Link>
      <Link to='/play'><h2>PLAY</h2></Link>
    </div>
  );
}

export default Menu;
