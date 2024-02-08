import React from 'react'

import { BiLayout } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";

import { SlArrowRight } from "react-icons/sl";
import { Link, Outlet } from 'react-router-dom';
const Pages = () => {
    return (
        <>
            <div>

                <h6 className='nav-heading nav-option'>Pages</h6>
                <div>
                    <Link to={'/authentication'} className='side-link'>
                        <div className="nav-option option">
                            <BsStack className="icons-visible  collapse.show " style={{ width: "20px", height: "20px" }} />
                            <h3 className='nav-font'>  Authentication</h3>
                            <SlArrowRight className='side-icon' />
                        </div>
                    </Link>
                </div>

                <div >
                    <Link to={'/pages'} className='side-link'>
                        <div className="nav-option option">
                            <RiPagesLine className="icons-visible  collapse.show " style={{ width: "20px", height: "20px" }} />
                            <h3 className='nav-font'> Pages</h3>
                            <SlArrowRight className='side-icon' />
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to={'/horizontal'} className='side-link'>
                        <div className="nav-option option">
                            <BiLayout className="icons-visible  collapse.show " style={{ width: "20px", height: "20px" }} />
                            <h3 className='nav-font'>  Horizontal</h3>
                            <SlArrowRight className='side-icon' />
                        </div>
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Pages