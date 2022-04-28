import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {

  const itemsData = [
    { id: 1, title: "Cemento", price: 900, imgUrl: 'https://cdn.pixabay.com/photo/2021/07/01/07/46/construction-6378558_960_720.jpg'}, 
    { id: 2, title: "Hierro del 12", price: 2400, imgUrl: 'https://cdn.pixabay.com/photo/2014/10/05/08/11/iron-rods-474792_960_720.jpg'}, 
    { id: 3, title: "Granza", price: 3000, imgUrl: 'https://cdn.pixabay.com/photo/2018/05/25/19/24/pebbles-3429815_960_720.jpg'}
  ]

  const[items, setItems] = useState([])    

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
    setTimeout(() => { 
        resolve(itemsData) 
      }, 2000)
    })

    promesa
    .then((result) => {
      setItems(result)
    })
    .catch(err => {
      console.log('Promesa rechazada', err)
    })
  }, [])

  return (
    <div className="container p-5">
      <h1> {greeting} </h1>
      <ItemList pItems={items}/>
    </div>
  );
};

export default ItemListContainer;
