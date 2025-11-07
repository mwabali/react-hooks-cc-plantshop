
import React from "react";

export default function PlantCard({ plant, onToggleSoldOut }) {
    const imageSrc = (() => {
        if (!plant.image) return `${process.env.PUBLIC_URL}/images/placeholder.png`;
        
        if (plant.image.startsWith("./")) {
            return `${process.env.PUBLIC_URL}/${plant.image.replace("./", "")}`;
        }
        
        if (plant.image.startsWith("/")) return `${process.env.PUBLIC_URL}${plant.image}`;
        return plant.image;
    })();

    return (
        <div className="plant-card">
            <img
                src={imageSrc}
                alt={plant.name}
                onError={(e) => { e.currentTarget.src = `${process.env.PUBLIC_URL}/images/placeholder.png`; }}
            />
            <h3>{plant.name}</h3>
            <p>${Number(plant.price || 0).toFixed(2)}</p>
            <button
                className={`stock-btn ${plant.soldOut ? "sold" : "in-stock"}`}
                onClick={() => onToggleSoldOut(plant.id)}
            >
                {plant.soldOut ? "Mark Available" : "In Stock"}
            </button>
            {plant.soldOut && <span className="sold-out-badge">SOLD OUT</span>}
        </div>
    );
}
