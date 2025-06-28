import React from 'react';

function Child({ sendData }) {
  const sendToParent = () => {
    sendData("Hello Parent! from Child");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendToParent}>Send Data to Parent</button>
    </div>
  );
}

export default Child;