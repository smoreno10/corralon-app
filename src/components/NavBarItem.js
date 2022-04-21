import React from 'react'

const NavBarItem = ({url, nombre}) => {
  return (
    <li className="nav-item">
    <a className="nav-link" aria-current="page" href={url}>
      {nombre}
    </a>
  </li>
  )
}

export default NavBarItem