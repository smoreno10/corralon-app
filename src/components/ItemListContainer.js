import React from "react";
import ItemCard from "./ItemCard";

const ItemListContainer = ({greeting}) => {
  return (
    <div className="container p-5">
      <h1> {greeting} </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <ItemCard name="Art 1"/> 
      </div>
    </div>
  );
};

export default ItemListContainer;
