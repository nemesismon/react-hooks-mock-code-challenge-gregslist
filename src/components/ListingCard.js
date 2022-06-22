import React, {useState} from "react";

function ListingCard({id, item, removeItem, searchedItem}) {
  
  const [favorite, setFavorite] = useState(false)

  const favToggle = () => setFavorite(!favorite)

      return (
        <div key={id}>
          <li className="card">
          <div className="image">
            <span className="price">$0</span>
            <img src={item.image} alt={item.description} />
          </div>
          <div className="details" onClick={favToggle}>
            {favorite === true ? (
              <button className="emoji-button favorite active">★</button>
            ) : (
              <button className="emoji-button favorite">☆</button>
            )}
            <strong>{item.description}</strong>
            <span> · {item.location}</span>
            <button className="emoji-button delete" onClick={() => removeItem(id, item)}>🗑</button>
          </div>
        </li>
      </div>
      )
    
}

export default ListingCard;
