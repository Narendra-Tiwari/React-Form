import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [childData, setChildData] = useState("");

  // Callback function to receive data from child
  const handleDataFromChild = (data) => {
    setChildData(data);
  };

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>Parent Component</h2>
      <p><strong>Data from Child:</strong> {childData}</p>

      <Child onSendData={handleDataFromChild} />
    </div>
  );
};

export default Parent;
