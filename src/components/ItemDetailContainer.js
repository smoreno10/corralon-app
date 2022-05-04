import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemsData } from "../data/itemsData";
import ItemDetail from "./ItemDetail";
import Wait from "./Wait";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(undefined);
  const getItem = (id) => itemsData.find((i) => i.id == id);

  useEffect(() => {
    setItem(undefined);
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(() => {
          return getItem(id);
        });
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
