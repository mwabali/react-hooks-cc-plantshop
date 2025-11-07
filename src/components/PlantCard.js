import React from "react";

export default function PlantCard({ plant, onToggleSoldOut }) {
  const base = process.env.PUBLIC_URL || "";
  const imageSrc = (() => {
    if (!plant.image) return `${base}/images/placeholder.png`;
    if (plant.image.startsWith("./")) return `${base}/${plant.image.replace("./", "")}`;
    if (plant.image.startsWith("/")) return `${base}${plant.image}`;
    return plant.image;
  })();

  return (
    <div className="plant-card" data-testid="plant-item">
      <img
        src={imageSrc}
        alt={plant.name}
        onError={(e) => {
          e.currentTarget.src = `${base}/images/placeholder.png`;
        }}
      />
      <h4>{plant.name}</h4>
      <p>Price: {String(plant.price)}</p>
      <button
        className={`stock-btn ${plant.soldOut ? "sold" : "in-stock"}`}
        onClick={() => onToggleSoldOut(plant.id)}
      >
        {plant.soldOut ? "Out of Stock" : "In Stock"}
      </button>
      {plant.soldOut && <span className="sold-out-badge">SOLD OUT</span>}
    </div>
  );
}