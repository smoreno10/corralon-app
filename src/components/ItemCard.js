import React, { useState } from 'react'
import Contador from './Contador'

const ItemCard = ({name}) => {
  return (
    <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="card-text">
          <Contador/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ItemCard