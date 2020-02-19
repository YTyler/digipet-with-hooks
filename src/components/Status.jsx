import React from 'react'

function Status(props) {
  const statusStyles = {
    textAlign: 'center'
  };
  return(
    <div style={statusStyles}>
      <h1>Hunger Level: {props.pet.hunger}</h1>
      <h1>Happiness: {props.pet.happiness}</h1>
    </div>
  )
}

export default Status;
