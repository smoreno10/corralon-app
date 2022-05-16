import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Wait from "./Wait";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(undefined);

  useEffect(() => {
    setItem(undefined);
    const db = getFirestore();
    const item = doc(db, "itemsData", id);
    getDoc(item).then((res) => {
      if (res.exists()) {
        setItem({ id: res.id, ...res.data()});
      }
    });
  }, []);

  return item ? <ItemDetail pItem={item} /> : <Wait />;
};

export default ItemDetailContainer;
