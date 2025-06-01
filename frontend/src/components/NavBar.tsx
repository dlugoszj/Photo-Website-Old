// import React from "react";

import "./css/Menus.css";
import "../../public/css/fonts.css";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar-home">
        <div className="krzysztof">
          <span className="lg-view">
            <a href="/tatanka/gallery">K R Z Y S Z T O F &nbsp; D L U G O S Z</a>
          </span>
          <span className="sm-view">
            <a href="/tatanka/gallery">
              K R Z Y S Z T O F <br /> D L U G O S Z
            </a>
          </span>
        </div>
        <div className="other-menu-opts">
          <a href="/tatanka/gallery"> PORTFOLIO </a>
          <a href="/tatanka/blog"> BLOG </a>
          <a href="/"> ABOUT </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
