import React from 'react'
import ItemCount from './ItemCount'

const Item = ({pItem}) => {
  const onAdd = (count) => window.alert(`La cantidad comprada es: ${count} `)
  return (
    <div className="col">
    <div className="card h-100">
      <img src={pItem.imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{pItem.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{`Precio: ${pItem.price} `}</h6>
          <ItemCount initial={1} stock={3} onAdd={onAdd}  />
      </div>
    </div>
  </div>
  )
}

export default Item