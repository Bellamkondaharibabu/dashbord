import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const YourComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="logosec">
      <img src='./assets/logo.png' alt='logo' className='logo-assets' />
      
      <div className="logo" id="open-sidnav">
        DASON
      </div>

      <AiOutlineMenu
        style={{ width: "25px", height: "25px" }}
        id='close-nav'
        onClick={toggleNav}
      />

      {/* Conditionally render the navigation menu */}
      {isNavOpen && (
        <div className="your-navigation-menu-class">
          {/* Your navigation menu content goes here */}
          {/* Make sure to close the menu when needed, e.g., onClick={toggleNav} */}
        </div>
      )}
    </div>
  );
};

export default YourComponent;
