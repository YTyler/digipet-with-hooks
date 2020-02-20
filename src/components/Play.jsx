import React from 'react';

function Play(props) {
  const playStyle = {
    textAlign: 'center',
    maxWidth: '90%',
    margin: 'auto'
  }
  const imgStyle = {
    maxHeight:'45vh',
    maxWidth: '45vw',
    margin: 'auto',
    marginTop: '20%',
  }
  return (
    <div style={playStyle}>
      <img src='/pet_play.png' style={imgStyle} alt='pet play'></img>
      <h2>PLAY</h2>
    </div>
  );
}

export default Play;
