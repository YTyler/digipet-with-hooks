import React from 'react';

function Menu(props) {
  const style0 = { boxShadow: (props.selected === 0) ? '3px 8px 10px black' : 'none'};
  const style1 = { boxShadow: (props.selected === 1) ? '3px 8px 10px black' : 'none'};
  const style2 = { boxShadow: (props.selected === 2) ? '3px 8px 10px black' : 'none'};
  const arrow0 = {
    opacity: (props.selected === 0) ? '1' : '0',
    color: '#5ea1db'
  };
  const arrow1 = {
    opacity: (props.selected === 1) ? '1' : '0',
    color: '#5ea1db'
  };
  const arrow2 = {
    opacity: (props.selected === 2) ? '1' : '0',
    color: '#5ea1db'
  };

  const menuStyles = {
    textAlign: 'center',
    padding: '20%',
    margin: '8px',
    marginTop: '7.5%'
  }

  return (
    <div style={menuStyles}>
      <h2 style={style0} >
        <span style={arrow0}>⫸</span> GAME <span style={arrow0}>⫷</span>
      </h2>
      <br />
      <br />
      <br />
      <h2 style={style1} >
        <span style={arrow1}>⫸</span> FEED <span style={arrow1}>⫷</span>
      </h2>
      <br />
      <br />
      <br />
      <h2 onClick={ () => {props.changeView(4)} } style={style2} >
        <span style={arrow2}>⫸</span> PLAY <span style={arrow2}>⫷</span>
      </h2>
    </div>
  );
}

export default Menu;
