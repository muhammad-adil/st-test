import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
// import { FaRegMoon, FaArrowLeft, FaHome } from 'react-icons/fa';
// import logo from "./../assets/logo/logo.png";
// import avatar from "./../assets/images/avatar.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li>
              <Link to='#' className='menu-bars-inside'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </li>
            {/* <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li> */}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/*
        <div className='header'>
        <nav>
          <ul className="nav-list">
            <li className="nav-item logo">
            <Link to='#' className='header-logo'>
              <div className="logo">
                <img
                  className="logo-img"
                  src={logo}
                  alt="LOGO"
                />
              </div>
            </Link>
            </li>
            <li className="nav-item">
              <a href="{'/'}"><FaRegMoon/></a>
            </li>
            <li className="nav-item">
              <a href="{'/'}"><FaArrowLeft/></a>
            </li>
            <li className="nav-item">
              <a href="{'/'}"><FaHome/></a>
            </li>
            <li className="nav-item nav-link-avatar">
              <a href="{'/'}">
                  <div className="avatar">
                    <img className="avatar__image" src={avatar} alt="avatar"/>
                    <div className="avatar__indicator"></div>
                  </div>
              </a>
            </li>
          </ul>
        </nav>
      </div> */}


      </IconContext.Provider>
    </>
  );
}

export default Navbar;
