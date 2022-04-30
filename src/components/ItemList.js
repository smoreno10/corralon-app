import React from "react";
import Item from "./Item";

const ItemList = ({ pItems }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {pItems.map((item) => (
          <Item key={item.id} pItem={item} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
