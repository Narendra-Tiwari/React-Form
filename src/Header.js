// Header.js
// import React from 'react';
// // import './header.css';

// function Header({ profileImage, setProfileImage }) {
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfileImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <header className="header">
//       <img src="/logo192.png" alt="Logo" className="logo" />
//       <div className="image-selector">
//         {profileImage && <img src={profileImage} alt="Profile" className="profile-pic" />}
//         <input type="file" accept="image/*" onChange={handleImageChange} />
//       </div>
//     </header>
//   );
// }

// export default Header;



// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// // import './header.css';
// // src/Header.js
// import './Header.css';


// export default function Header({ logoSrc, profileImage, onImageSelect }) {
//   const location = useLocation();

//   return (
//     <header className="site-header">
//       <div className="header-left">
//         <img src={logoSrc} alt="Logo" className="logo" />
//       </div>

//       <nav className="header-nav">
//         <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
//         <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">About</Link>
//         <Link className={location.pathname === '/submitted' ? 'active' : ''} to="/submitted">Submitted</Link>
//       </nav>

//       <div className="header-right">
//         <label className="image-picker">
//           {profileImage
//             ? <img src={profileImage} alt="Profile" className="profile-thumb"/>
//             : 'Select Image'}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={e => {
//               const file = e.target.files[0];
//               if (!file) return;
//               const url = URL.createObjectURL(file);
//               onImageSelect(url);
//             }}
//           />
//         </label>
//       </div>
//     </header>
//   );
// }






import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header({ logoSrc, profileImage, onImageSelect, onLogout }) {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const fileInputRef = useRef(null);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    onImageSelect(url);
  };

  return (
    <header className="site-header">
      <div className="header-left">
        <img src={logoSrc} alt="Logo" className="logo" />
      </div>

      <nav className="header-nav">
        <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
        <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">About</Link>
        <Link className={location.pathname === '/submitted' ? 'active' : ''} to="/submitted">Submitted</Link>
      </nav>

      <div className="header-right" ref={dropdownRef}>
        <div className="dropdown">
          <button className="profile-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-thumb" />
            ) : (
              'Select Image'
            )}
          </button>

          {/* {dropdownOpen && (
            <div className="dropdown-menu">
              <div
                className="dropdown-item"
                onClick={() => {
                  fileInputRef.current.click();
                  setDropdownOpen(false);
                }}
              >
                New Profile
              </div>
              <div
                className="dropdown-item"
                onClick={() => {
                  setDropdownOpen(false);
                  onLogout && onLogout();
                }}
              >
                Logout
              </div>
            </div>
          )} */}


          {dropdownOpen && (
  <div className="dropdown-menu">
    <div
      className="dropdown-item"
      onClick={() => {
        fileInputRef.current.click();
        setDropdownOpen(false);
      }}
    >
      New Profile
    </div>
    <div
      className="dropdown-item"
      onClick={() => {
        setDropdownOpen(false);
        onImageSelect(); 
        onLogout && onLogout();
      }}
    >
      Logout
    </div>
  </div>
)}

          
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </header>
  );
}


