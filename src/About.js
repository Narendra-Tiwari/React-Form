// About.js
// import React from 'react';
// import Form from './Form';

// function About({ setSubmittedData }) {
//   return (
//     <div className="about">
//       <Form setSubmittedData={setSubmittedData} />
//     </div>
//   );
// }

// export default About;





// src/About.js
// import React from 'react';
// import Form from './Form';

// export default function About({ onSubmit }) {
//   return (
//     <div className="page about-page">
//       <h1>About / Registration</h1>
//       <Form onSubmit={onSubmit} />
//     </div>
//   );
// }





import React from 'react';
import Form from './Form';

export default function About({ onSubmit }) {
  return (
    <div className="page about-page">
      <h1>About / Registration</h1>
      <Form onSubmit={onSubmit} />
    </div>
  );
}

