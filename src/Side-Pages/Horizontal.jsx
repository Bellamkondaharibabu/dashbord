import React from 'react'
import { Link } from 'react-router-dom'

const Horizontal = () => {
  return (
    <div className='contacts' >
      <Link to={'/horizontal'} >
        <h1>this is Horizontal</h1>
      </Link>
    </div>
  )
}

export default Horizontal