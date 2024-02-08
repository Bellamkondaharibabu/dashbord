import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import Submenu from '../../sideComponents/submenu/Submenu'


const Ecommerce = () => {
  return (
    <>
      <div className='submenu'>

          <ul>
            <li>
        <Link to={"/chat"}>Item 1</Link></li>
           <li><Link to={'/dashbord'}> Item2</Link></li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>



      </div>

      <Outlet />
    </>
  )
}

export default Ecommerce