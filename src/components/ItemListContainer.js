import React from "react";

const ItemListContainer = ({children}) => {
  return (
    <div className="container p-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {children}
      </div>
    </div>
  );
};

export default ItemListContainer;
