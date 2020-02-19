import React from 'react';

function Pet(props) {
  const petStyle = {
    textAlign: 'center'
  }
  const imgStyle = {
    maxHeight:'45vh',
    maxWidth: '45vw',
    margin: 'auto',
    marginTop: '5%'
  }
  return (
    <div style={petStyle}>
      <img src='/pet.png' alt='pet' style={imgStyle}/>
      <h2 onClick={ () => {props.changeView(1)} }>MENU</h2>
    </div>
  );
}

export default Pet;
