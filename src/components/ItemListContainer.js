import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Wait from "./Wait";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState(undefined);

  useEffect(() => {
    setItems(undefined);
    const db = getFirestore();
    const itemsDataRef = collection(db, "itemsData");
    const qry = categoryId ? query(itemsDataRef,  where("category", "==", parseInt(categoryId))) : itemsDataRef

    getDocs(qry)
    .then((res) => {
      setItems(res.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
  }, [categoryId]);

  switch (categoryId) {
    case "1":
      greeting = "Materiales de construcción";
      break;
    case "2":
      greeting = "Gifería";
      break;
    default:
      break;
  }

  return items ? (
    <div className="card card-container container mt-4">
      <div className="card-body">
        <h5 className="card-title">{greeting}</h5>
        <ItemList pItems={items} />
      </div>
    </div>
  ) : (
    <Wait />
  );
};

export default ItemListContainer;
