import React, {useState} from "react";

function Search({ handleSearch }) {


 const [searchItems, setSearchItems] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchItems)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItems}
        onChange={(e) => setSearchItems(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
