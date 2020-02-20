import React from 'react';

function Feed(props) {

  const style0 = { boxShadow: (props.selected === 0) ? '3px 8px 10px black' : 'none'};
  const style1 = { boxShadow: (props.selected === 1) ? '3px 8px 10px black' : 'none'};
  const style2 = { boxShadow: (props.selected === 2) ? '3px 8px 10px black' : 'none'};

  const feedStyles = {
    textAlign: 'center',
    padding: '20%',
    margin: '8px',
    marginTop: '8%'
  }
  return (
    <div style={feedStyles}>
      <h2 style={style0}>A LITTLE</h2>
      <br />
      <br />
      <br />
      <h2 style={style1}>A LOT</h2>
      <br />
      <br />
      <br />
      <h2 style={style2}>A TON</h2>
    </div>
  );
}

export default Feed;
