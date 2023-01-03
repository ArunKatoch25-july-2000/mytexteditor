import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../images/menu.png";
import "../css/navbar.css";

const Navbar = () => {
  const openHamburger = () => {
    let hamburger = document.querySelector(".mobile_nav");
    hamburger.classList.toggle("show_Mobile_Nav");
  };

  return (
    <>
      <nav>
        <span>My Text Editor</span>
        <ul className="big_devices_ul">
          <li>
            <NavLink className="my_Nav_Links" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="my_Nav_Links" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="my_Nav_Links" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <img src={menu} alt="menu" onClick={openHamburger} id="menu-btn" />
      </nav>

      <div className="mobile_nav">
        <ul className="small_devices_ul">
          <li>
            <NavLink className="mobile_Nav_Links" to="/">
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="mobile_Nav_Links" to="/about">
              About{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="mobile_Nav_Links" to="/contact">
              Contact{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
