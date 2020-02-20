import React from 'react';

function Menu(props) {
  const menuStyles = {
    textAlign: 'center',
    padding: '20%',
    margin: '8px',
  }

  return (
    <div style={menuStyles}>
      <h2 onClick={ () => {props.changeView(2)} } >GAME</h2>
      <h2 onClick={ () => {props.changeView(3)} }>FEED</h2>
      <h2 onClick={ () => {props.changeView(4)} }>PLAY</h2>
    </div>
  );
}

export default Menu;
