import { useState, } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { MdDarkMode } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';

import { FaRegBell } from "react-icons/fa6";

import { BsFillGridFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import Profilepage from './Profilepage';
import Github from './Github';



library.add(faArrowRight);

const Header = ({ click }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };


  const [git, setGit] = useState(false);

  const toggleGit = () => {
    setGit(!git);
  };






  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    applyTheme(!isDarkTheme)
  };

  const applyTheme = (darkMode) => {
    const body = document.body;



    if (body) {
      body.style.backgroundColor = darkMode ? 'black' : 'white';
    }




  };


  return (
    <div className="header">
      <header className={`app ${isDarkTheme ? 'dark' : 'light'}`}>
        <div className="logosec" >
          <img src="./assets/logo.png" alt="logo" className="logo-assets" onClick={click} />
          <div id="open-sidnav" className='logo' onClick={click}>
            DASON

          </div>

          <AiOutlineMenu style={{ fontSize: "25px" }} id="company" onClick={click} />
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search" />
          <div className="searchbtn">
            <img src="./assets/Untitled-design-(28).png" className="icn srchicn" alt="search-icon" />
          </div>
        </div>

        <div className='icons-header'>

          <MdDarkMode id="darkthem" className='icon-font' onClick={toggleTheme} />
          <span className={`submenu ${git ? 'open' : ''}`}></span>
          <span onClick={toggleGit}>
          {git && (
         <Github/>
          )}
          <BsFillGridFill className='icon-font'  /></span>
         
         

          <FaRegBell className='icon-font' />

          <IoSettingsOutline className='icon-font' />


          <div className="dp">
            <img src="./assets/hari photo.jpeg" className="dpicn" alt="dp" />

          </div>
          <div className='login-profile'>
          <div className={`submenu ${isOpen ? 'open' : ''}`}></div>
           <span onClick={toggleSubMenu}>HARIBABU<FaAngleDown  /></span> 
           {isOpen && (
            <span><Profilepage className='detail' /></span>
            )}
          </div>
         
        </div>
      </header>
    </div>
  );
};

export default Header;
