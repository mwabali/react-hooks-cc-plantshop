import React from "react";

function PlantCard({plant, onToggleSoldOut}) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
      <h3>{plant.name}</h3>
            <p>${plant.price.toFixed(2)}</p>
            <button onClick={() => onToggleSoldOut(plant.id)}>
                {plant.soldOut ? "Mark Available" : "Mark Sold Out"}
            </button>
            {plant.soldOut && <span className="sold-out-badge">SOLD OUT</span>}
    </li>
  );
}

export default PlantCard;
