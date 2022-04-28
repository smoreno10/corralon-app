import React from 'react'
import Item from './Item'

const ItemList = ({pItems}) => {
  return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {pItems.map(l => <Item key={l.id} pItem={l} /> )}
      </div>
  )
}

export default ItemList