import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchedItem}) {

  const [listData, setListData] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => setListData(data))
  },[])

  const removeItem = (id) => {
    const deleteItem = listData.filter(element => element.id !== id)
    setListData(deleteItem)

    fetch("http://localhost:6001/listings/" + id, {
      method: "DELETE",
    })
  }

  const filteredListData = listData.filter((item) => {
    if (searchedItem === "") {return item}
    else if (item.description === searchedItem){return item}
  })

  const displayCards = filteredListData.map((data) => {
    return (
    <ListingCard key={data.id} id={data.id} item={data} removeItem={removeItem} searchedItem={searchedItem}/>
    )
  })

  return (
    <main>
      <ul className="cards">
        {displayCards}
      </ul>
    </main>
  )
  }

export default ListingsContainer