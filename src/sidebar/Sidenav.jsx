
// import { useState } from 'react';


import Dashbord from "../sideComponents/Dashbord"
import EcommerceApps from "../sideComponents/EcommerceApps"
import Pages from "../sideComponents/Pages"
// import DashbordDesion from "../Dashbord/DashbordDesion"
import Components from "../sideComponents/Components"
// import Sample from "../Sample"


const Sidenav = ({ open }) => {






    return (
        <>


            <div className="main-container" >
        
                <div className={open ? "nav-open collaps" : "nav-open"}>

                    <div className="nav-upper-options">

                        <div className=" header">

                            <Dashbord />
                            <EcommerceApps />
                            <Pages />
                            <Components />

                        </div>

                    </div>

                </div>
                {/* <Email/> */}
                {/* <Sample/> */}
               


            </div>




        </>
    )
}

export default Sidenav