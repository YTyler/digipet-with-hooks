import React from 'react';

function Play(props) {
  const playStyle = {
    textAlign: 'center'
  }
  const imgStyle = {
    maxHeight:'45vh',
    maxWidth: '45vw',
    margin: 'auto',
    marginTop: '8%',
  }
  return (
    <div style={playStyle}>
      <img src='/pet_play.png' style={imgStyle}></img>
      <h2 onClick={ () => {props.changeView(0)} }>BACK</h2>
    </div>
  );
}

export default Play;
