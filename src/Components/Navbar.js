import React from 'react';
import '../Styles/Navbar.css'; // Assuming you have a CSS file named Navbar.css in the same directory
import Logo from "../images/amazon_logo.png";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="logo" className="logo"/> {/* Replace with your logo */}
        <h1>EDUSPHERE</h1> {/* Replace with your website name */}
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search..." className="search-bar"/>
      </div>
      <div className="navbar-right">
      {/* <FontAwesomeIcon icon="bookmark" className="fa-bookmark" style={{ color: "#ebedef" }} /> */}

        <div className="profile-circle"></div> {/* This will be the user profile circle */}
      </div>
    </div>
  );
}

export default Navbar;