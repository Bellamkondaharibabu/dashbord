import React from 'react'
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { FaGift } from "react-icons/fa6";
import { BsBox } from "react-icons/bs";
import { BsSliders2Vertical } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { FcElectronics } from "react-icons/fc";
import { CiMap } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { SlArrowRight } from "react-icons/sl";
import { Link } from 'react-router-dom';




const Components = () => {
    return (

        <div>
            <h6 className='nav-heading nav-option'>Components</h6>

            <ul className='nav-list'>
                <li>
                    <div className="nav-option option">
                        <BiSolidBriefcaseAlt className="icons-visible  collapsing " style={{ width: "20px", height: "20px" }} />
                        <h3 className='nav-font'>  Bootstrap</h3>
                        <SlArrowRight className='side-icon' />
                    </div>
                </li>
                <li>
                    <div className="nav-option option">
                        <FaGift className="icons-visible  collapsing " style={{ width: "20px", height: "20px" }} />
                        <h3 className='nav-font'>  Extended</h3>
                        <SlArrowRight className='side-icon' />
                    </div>
                </li>
                <li>
                <Link to={"/form"}> 
                    <div className="nav-option option">
                        <BsBox className="icons-visible  collapsing " style={{ width: "20px", height: "20px" }} />
                        <span className='nav-font'>   Forms</span>
                        <SlArrowRight className='side-icon' />
                    </div>
                    </Link>
                </li>
                <li>
                    <div className="nav-option option">
                        <BsSliders2Vertical className="icons-visible  collapsing " style={{ width: "20px", height: "20px" }} />
                        <h3 className='nav-font'> Tables</h3>
                        <SlArrowRight className='side-icon' />
                    </div>
                </li>
                <li>
                    <div className="nav-option option">
                        <FiPieChart className="icons-visible  collapsing " style={{ width: "20px", height: "20px" }} />
                        <h3 className='nav-font'>  Charts</h3>
                        <SlArrowRight className='side-icon' />
                    </div>
                </li>
                <li>
                    <div className="nav-option option">
                        <FcElectronics className="icons-visible  collapsing " style={{ width: "20px", height: "20px" }} />
                        <h3 className='nav-font'>   Icons</h3>
                        <SlArrowRight className='side-icon' />
                    </div>
                </li>
                <li>
                    <div className="nav-option option">
                        <CiMap className="icons-visible  collapsing " style={{ width: "20px", height: "20px" }} />
                        <h3 className='nav-font'>  Maps</h3>
                        <SlArrowRight className='side-icon' />
                    </div>
                </li>
                <li>
                    <div className="nav-option option">
                        <CiShare2 className="icons-visible  collapsing " style={{ width: "20px", height: "20px" }} />
                        <h3 className='nav-font'>   Multi Level</h3>
                        <SlArrowRight className='side-icon' />
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default Components