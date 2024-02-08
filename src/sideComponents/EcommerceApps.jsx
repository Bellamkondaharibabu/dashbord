import React, { useState } from 'react'
import { CiChat1 } from "react-icons/ci";
import { GrTasks } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";

// import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";


import { SlArrowRight } from "react-icons/sl";
import { Link, Outlet } from 'react-router-dom';
import Submenu from "./Submenu";
import Ecommerce from '../Apps/ecommerce/Ecommerce';


const EcommerceApps = () => {
  const [toggle, settoggle] = useState(false);
  const [chat, setchat] = useState(false);
  // const [email, setEmail] = useState(false);

  return (
    <div>

      <h6 className='nav-heading nav-option'>Apps</h6>
      <Link to={"/"} className='side-link'>

       
          <div className="nav-option option">

            <AiOutlineShoppingCart className=" collapse.show"
              style={{ width: "20px", height: "20px" }} />
            <h3 className='nav-font'onClick={() => settoggle(!toggle)}>Ecommerce</h3>
            <SlArrowRight  className='side-icon' />

          </div>
          {toggle && (
           <span><Submenu  className=" toggle-list"/></span> 
          )}
       
      </Link>


      <Link to={"/chat"} className='side-link'>
        <div className="nav-option option">

          <CiChat1 className="  collapse.show " style={{ width: "20px", height: "20px" }} />
          <h3 className='nav-font'   onClick={() => setchat(!chat)}>  Chat<span className="glyphicon glyphicon-chevron-right"></span></h3>
          <SlArrowRight className='side-icon' />
        </div>
        {chat && (
        <span><Ecommerce className="detail" /></span>
        )}
      </Link>


      <Link to={"/email"} className='side-link'>
        <div className="nav-option option">
          <HiOutlineMail className="  collapse.show " style={{ width: "20px", height: "20px" }} />
          <h3 className='nav-font' >  Email </h3>
          <SlArrowRight className='side-icon' />
        </div>
       
        {/* <span><Ecommerce className="detail" /></span> */}
       
      </Link>



      <Link to={"/calendar"} className='side-link'>
        <div className="nav-option option">
          <CiCalendar className=" collapse.show " style={{ width: "20px", height: "20px" }} />

          <h3 className='nav-font' >   Calendar</h3>
          <SlArrowRight className='side-icon' />
        </div>
      </Link>


      <Link to={"/contacts"} className='side-link'>
        <div className="nav-option option">

          <IoMdContacts className="  collapse.show " style={{ width: "20px", height: "20px" }} />
          <h3 className='nav-font' >   Contacts</h3>
          <SlArrowRight className='side-icon' />
        </div>
      </Link>


      <Link to={"/tasks"} className='side-link'>
        <div className="nav-option option">
          <GrTasks className="  collapse.show " style={{ width: "20px", height: "20px" }} />

          <h3 className='nav-font' > Tasks</h3>
          <SlArrowRight className='side-icon' />
        </div>
      </Link>

      <Outlet />
    </div>

  )
}

export default EcommerceApps