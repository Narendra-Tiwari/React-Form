// // App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import Home from './Home';
// import About from './About';
// import Submitted from './Submitted';
// import './App.css';

// function App() {
//   const [submittedData, setSubmittedData] = useState(null);
//   const [profileImage, setProfileImage] = useState(null);

//   return (
//     <Router>
//       <Header profileImage={profileImage} setProfileImage={setProfileImage} />
//       <div className="main-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About setSubmittedData={setSubmittedData} />} />
//           <Route path="/submitted" element={<Submitted submittedData={submittedData} />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;








// // App.js
// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';           // ← no BrowserRouter here
// import Header from './Header';
// import Footer from './Footer';
// import Home from './Home';
// import About from './About';
// import Submitted from './Submitted';
// import './App.css';

// function App() {
//   const [submittedData, setSubmittedData] = useState(null);
//   const [profileImage, setProfileImage] = useState(null);

//   return (
//     <>
//       <Header profileImage={profileImage} setProfileImage={setProfileImage} />
//       <div className="main-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About setSubmittedData={setSubmittedData} />} />
//           <Route path="/submitted" element={<Submitted submittedData={submittedData} />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;








// src/App.js
// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Header from './Header';
// import Footer from './Footer';
// import Home from './Home';
// import About from './About';
// import Submitted from './Submitted';

// import './App.css';

// function App() {
//   // hold submitted form data here
//   const [submittedData, setSubmittedData] = useState(null);
//   // pass down to header so user can pick a profile image
//   const [profileImage, setProfileImage] = useState(null);

//   return (
//     <>
//       <Header
//         logoSrc="/logo192.png"
//         profileImage={profileImage}
//         onImageSelect={setProfileImage}
//       />

//       <main className="main-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/about"
//             element={<About onSubmit={setSubmittedData} />}
//           />
//           <Route
//             path="/submitted"
//             element={<Submitted data={submittedData} />}
//           />
//         </Routes>
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Submitted from './Submitted';

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  return (
    <>
      <Header
        logoSrc="/logo192.png"
        profileImage={profileImage}
        onImageSelect={setProfileImage}
      />

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About onSubmit={setSubmittedData} />} />
          <Route path="/submitted" element={<Submitted data={submittedData} />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
