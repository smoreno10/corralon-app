import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Wait from "./Wait";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState(undefined);

  useEffect(() => {
    setItems(undefined);
    const db = getFirestore();
    const items = collection(db, "itemsData");
    getDocs(items).then((res) => {
      const ArrItems = res.docs.map((d) => ({ id: d.id, ...d.data() }));
      if (categoryId) {
        setItems(ArrItems.filter((i) => i.category == categoryId));
      } else {
        setItems(ArrItems);
      }
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
    <div className="card container mt-4">
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
