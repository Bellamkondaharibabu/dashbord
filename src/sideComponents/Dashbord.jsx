
import React from 'react'
import { LuHome } from "react-icons/lu";
import { Link, Outlet } from 'react-router-dom';


const Dashbord = () => {
 
  return (
    <>


      <div> <h6 className='nav-heading nav-option'>Menu</h6>
        {/* <a href="index.html" className="active"> */}

        <Link to={'/dashbord'} className='side-link'>
          <div className="nav-option option">

            <LuHome  style={{ width: "20px", height: "20px" }} />

            <h3 className='nav-font  ' >  Dashboard </h3>

            <span className="badge rounded-pill bg-soft-success text-success float-end   side-icon " style={{ marginleft: "5px" }}>9+</span>

          </div>
        
        </Link>
        <Outlet />


      </div>
     

    </>
  )
}

export default Dashbord