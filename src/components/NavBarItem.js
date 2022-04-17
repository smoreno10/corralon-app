import React from 'react'

const NavBarItem = (props) => {
  return (
    <li className="nav-item">
    <a className="nav-link" aria-current="page" href={props.url}>
      {props.nombre}
    </a>
  </li>
  )
}

export default NavBarItem