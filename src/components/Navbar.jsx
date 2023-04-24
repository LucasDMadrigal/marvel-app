import React from "react";
import "./styles/Navbar.css";
import NavLogo from "./assets/images/mainLogo.svg";
import SearchIcon from "./assets/images/search-icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav--first">
        <div className="nav-dot--container">
          <div className="nav-dot"></div>
          <div className="nav-dot"></div>
          <div className="nav-dot"></div>
        </div>
        <Link>
          <picture className="nav-logo--container">
            <img src={NavLogo} alt="nav-logo" />
          </picture>
        </Link>
      </div>
      <div className="search--container">
        <input className="search-input" type="text" />
        <button className="search-button">
          <img src={SearchIcon} alt="searcch-icon" />
        </button>
      </div>  
    </nav>
  );
};

export default Navbar;
