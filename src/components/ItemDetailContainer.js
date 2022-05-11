import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Wait from "./Wait";
import { itemsData } from "../data/itemsData"


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(undefined);

  useEffect(() => {
    setItem(undefined)
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(itemsData.find((i) => i.id == id));
      }, 2000);
    });
    promesa
      .then((result) => {
        setItem(result);
      })
      .catch((err) => {
        console.log("Promesa rechazada", err);
      });
  }, []);

  return item ? <ItemDetail pItem={item} /> : <Wait />;
};

export default ItemDetailContainer;
