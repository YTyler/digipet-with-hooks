import React from 'react';

function Feed(props) {
  const feedStyles = {
    textAlign: 'center',
    padding: '20%',
    margin: '8px',
  }
  return (
    <div style={feedStyles}>
      <h2>A Little</h2>
      <h2>A Lot</h2>
      <h2>A Ton</h2>
      <h2 onClick={ () => {props.changeView(0)} }>BACK</h2>
    </div>
  );
}

export default Feed;
