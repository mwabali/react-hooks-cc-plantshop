import React from "react";
import PlantCard from "./PlantCard";

export default function PlantList({ plants, onToggleSoldOut }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <li key={plant.id} className="card">
          <PlantCard plant={plant} onToggleSoldOut={onToggleSoldOut} />
        </li>
      ))}
    </ul>
  );
}
