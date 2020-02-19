import React from 'react';

function Pet() {
  const petStyle = {
    textAlign: 'center'
  }
  const imgStyle = {
    maxHeight:'50vh'
  }
  return (
    <div style={petStyle}>
      <img src='/pet.png' alt='pet' style={imgStyle}/>
    </div>
  );
}

export default Pet;
