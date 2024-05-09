// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link, NavLink } from 'react-router-dom';
// import { FaHome, FaUtensils } from 'react-icons/fa';
// import './header.css';

// const Headers = () => {
//   return (
//     <Navbar className="custom-navbar" variant="dark">
//       <Container>
//         <NavLink to="/" className="nav-link home-link">
//           <img
//             src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
//             alt="logo"
//             className="header-logo-image"
//           />
//           FIND DUBAI
//         </NavLink>

//         <Nav className="justify " >

//           <NavLink to="/mainpage" className="nav-link restaurants-link" style={{ color: 'white' }}>
//             HOME
//           </NavLink>
//           <NavLink to="/" className="nav-link restaurants-link" style={{ color: 'white' }}>
//             ABOUT
//           </NavLink>
//           <NavLink to="/" className="nav-link restaurants-link" style={{ color: 'white' }}>
//             CONTACT 
//           </NavLink>
//           <NavLink to="/" className="nav-link restaurants-link" style={{ color: 'white' }}>
//             LOGIN
//           </NavLink>
//         </Nav>
//         <div className="collapse d-md-none" id="headerCollapse">
//         <div className="header-sm-list-container">
//           <ul className="header-links-list-container-sm">
//             <li className="header-list-item-sm">
//               <NavLink className="header-link-item-sm">Home</NavLink>
//             </li>
//             <li className="header-list-item-sm">
//               <NavLink className="header-link-item-sm">about</NavLink>
//             </li>
//             <li className="header-list-item-sm">
//               <NavLink className="header-link-item-sm">contact</NavLink>
//             </li>
//             <li className="header-list-item-sm">
//               <NavLink className="header-link-item-sm">login</NavLink>
//             </li>

//             </ul>
//             </div>
//             </div>
//       </Container>
//     </Navbar>
//   );
// };

// export default Headers;


import React, { useState } from "react";
import './header.css';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";


const Header = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isUserLoginOpen, setIsUserLoginOpen] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  return (
    <div className="header-main-container">
    
      <div className="header-middle-container">
        <NavLink className={"header-logo-container"}>
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
            alt="logo"
            className="header-logo-image"
          />
          <span className="header-website-name">FindDubai</span>
        </NavLink>
        <div className="d-none d-md-block">
          <ul className="header-large-links-list-container">
            <li className="header-large-list-item">
              <NavLink className="header-large-link-item" to="/mainpage">Home</NavLink>
            </li>
            <li className="header-large-list-item">
              <NavLink className="header-large-link-item">About</NavLink>
            </li>
            <li className="header-large-list-item">
              <NavLink className="header-large-link-item">
                Contact
              </NavLink>
            </li>
            <li className="header-large-list-item">
              <NavLink className="header-large-link-item">Login</NavLink>
            </li>
          </ul>
        </div>
        <div className="d-md-none">
          <button
            className="header-toggler-button-sm"
            data-bs-toggle="collapse"
            data-bs-target="#headerCollapse"
            aria-expanded="false"
            aria-controls="headerCollapse"
          >
            <VscThreeBars className="header-toggle-bars-sm" />
          </button>
        </div>
      </div>
     
      <div className="collapse d-md-none" id="headerCollapse">
        <div className="header-sm-list-container">
          <ul className="header-links-list-container-sm">
            <li className="header-list-item-sm">
              <NavLink className="header-link-item-sm" to="/mainpage">Home</NavLink>
            </li>
            <li className="header-list-item-sm">
              <NavLink className="header-link-item-sm">About</NavLink>
            </li>
            <li className="header-list-item-sm">
              <NavLink className="header-link-item-sm">Contact</NavLink>
            </li>
            <li className="header-list-item-sm">
              <NavLink className="header-link-item-sm">Login</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
