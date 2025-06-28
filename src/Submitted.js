// Submitted.js
// import React from 'react';

// function Submitted({ submittedData }) {
//   if (!submittedData) return <p>No data submitted yet.</p>;

//   return (
//     <div className="submitted">
//       <h2>Submitted Data</h2>
//       <p><strong>Name:</strong> {submittedData.Name}</p>
//       <p><strong>Age:</strong> {submittedData.Age}</p>
//       <p><strong>Email:</strong> {submittedData.Email}</p>
//       <p><strong>Mobile No:</strong> {submittedData.Mobile_No}</p>
//       <p><strong>Gender:</strong> {submittedData.Gender}</p>
//     </div>
//   );
// }

// export default Submitted;



import React from 'react';

export default function Submitted({ data }) {
  if (!data) {
    return <p>No data—please go to the <a href="/about">About</a> page and submit the form.</p>;
  }
  return (
    <div className="page submitted-page">
      <h1>Submission Details</h1>
      <ul>
        <li><strong>Name:</strong> {data.Name}</li>
        <li><strong>Age:</strong> {data.Age}</li>
        <li><strong>Email:</strong> {data.Email}</li>
        <li><strong>Mobile:</strong> {data.Mobile_No}</li>
        <li><strong>Gender:</strong> {data.Gender}</li>
      </ul>
    </div>
  );
}
