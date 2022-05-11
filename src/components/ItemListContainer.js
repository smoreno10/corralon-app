import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Wait from "./Wait";
import { useParams } from "react-router-dom";
import { itemsData } from "../data/itemsData"

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [ items, setItems] = useState(undefined);

  useEffect(() => {
    setItems(undefined)
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryId ? itemsData.filter((i) => i.category == categoryId) : itemsData);
      }, 2000);
    });

    promesa
      .then((result) => {
        setItems(result);
      })
      .catch((err) => {
        console.log("Promesa rechazada", err);
      });
  }, [categoryId]);

  return items ? (
    <div className="container p-5">
      <h1> {greeting} </h1>
      <ItemList pItems={items} />
    </div>
  ) : (
    <Wait />
  );
};

export default ItemListContainer;
