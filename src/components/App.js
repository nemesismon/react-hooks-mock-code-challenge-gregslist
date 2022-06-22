import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [searchedItem, setSearchedItem] = useState()

  const handleSearch = (itemSearched) => {
    setSearchedItem(itemSearched)
  }

  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer searchedItem={searchedItem}/>
    </div>
  );
}

export default App;
