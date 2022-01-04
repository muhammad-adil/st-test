import React from "react"; //, { useState }
// import * as FaIcons from 'react-icons/fa';
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { IconContext } from 'react-icons';
import { FaRegMoon, FaArrowLeft } from "react-icons/fa";
import logo from "./../assets/logo/logo.png";
import avatar from "./../assets/images/avatar.png";

function Header() {
  return (
    <>
      <div className="header">
        <nav>
          <ul className="nav-list">
            <li className="nav-item logo">
              <Link to="#" className="header-logo">
                <div className="logo">
                  <img className="logo-img" src={logo} alt="LOGO" />
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <a href="{'/'}">
                <FaRegMoon />
              </a>
            </li>
            <li className="nav-item">
              <a href="{'/'}">
                <FaArrowLeft />
              </a>
            </li>
            <li className="nav-item">
              <a href="{'/'}">
                <BiHomeAlt />
              </a>
            </li>
            <li className="nav-item nav-link-avatar">
              <a href="{'/'}">
                <div className="avatar">
                  <img className="avatar__image" src={avatar} alt="avatar" />
                  <div className="avatar__indicator"></div>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="breadcrumb">
            <div className='iconWrapper'>
                <FaHome/>
            </div><p>Dashboard <span>&gt;</span> Articles</p>
        </div> */}
      <div className="breadcrumb-head p-lr-20">
        <ul className="breadcrumb">
          <li>
            <a href={"/"}>
              <div className="iconWrapper">
                <BiHomeAlt />
              </div>
            </a>
          </li>
          <li>
            <a className="breadcrumb-parent" href={"/"}>
              Dashboard
            </a>
          </li>
          <li>
            <a className="breadcrumb-active" href={"/"}>
              {" "}
              Articles
            </a>
          </li>
        </ul>

        <div className="breadcrumb-date-week">
          <p>Tuesday, Aug 31 CW41</p>
        </div>
      </div>
    </>
  );
}

export default Header;
