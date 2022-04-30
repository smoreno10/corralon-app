import React from 'react'
import { Link } from 'react-router-dom'

const NavBarItem = ({url, nombre}) => {
  return (
    <li className="nav-item">
      <Link className='nav-link' to={url}>{nombre}</Link>
    </li>
  )
}

export default NavBarItem