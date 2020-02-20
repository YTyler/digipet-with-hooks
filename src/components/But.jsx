import React, { useState } from 'react';

function But(props) {

  const [localBool, setLocalBool] = useState(true);

  const clicker = () => {
    setLocalBool(!localBool);
    props.setChangeColor(localBool);
  }

  return (
    <div>
      <button onClick={clicker}></button>
    </div>
  );
}

export default But;
