import React from 'react'
import { Link } from 'react-router-dom'

const Authentication = () => {
  return (
    <div className='contacts' >
      <Link to={'/authentication'}>
        <h1>Authentication</h1>
      </Link>
    </div>
  )
}

export default Authentication