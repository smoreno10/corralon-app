import React from 'react'
import ItemCount from './ItemCount'

const ItemCard = ({name}) => {
  const onAdd = (count) => window.alert(`La cantidad comprada es: ${count} `)
  return (
    <div className="col">
    <div className="card h-100">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
          <ItemCount initial={1} stock={3} onAdd={onAdd}  />
      </div>
    </div>
  </div>
  )
}

export default ItemCard