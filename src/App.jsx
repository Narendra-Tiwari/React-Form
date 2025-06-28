import React, { useState } from 'react';
import Child from './Child';
import FormComponent from './FormComponent';
function App() {
  const [childData, setChildData] = useState('');

  const handleDataFromChild = (data) => {
    setChildData(data);
  };

  return (
    <div>
      
      {/* <p>Data from Child: {childData}</p>
      <Child sendData={handleDataFromChild} /> */}
    <FormComponent/>
    </div>
  );
}

export default App;
