import React from 'react'
import { Link } from 'react-router-dom'

const Submenu = () => {
  return (
    <div className='submenu'>

  
        <ul >
          <Link to={'/tasks'}> <li>Products </li></Link>
          <Link to={'/'}><li>Product Detail </li></Link>
          <Link to={'/'}><li>Orders  </li></Link>
          <Link to={'/'}><li >Customers</li></Link>
          <Link to={'/'}><li>Cart</li></Link>
          <Link to={'/'}><li>Checkout</li></Link>
          <Link to={'/'}><li>Shops</li></Link>
          <Link to={'/'}><li>Add Product</li></Link>
        </ul>


     
    </div>
  )
}

export default Submenu