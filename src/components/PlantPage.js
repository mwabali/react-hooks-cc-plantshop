import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const API = "http://localhost:6001/plants";

export default function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let mounted = true;
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        const normalized = data.map(p => ({ ...p, soldOut: p.soldOut ?? false }));
        setPlants(normalized);
      })
      .catch((err) => console.error("Error fetching plants:", err));
    return () => { mounted = false; };
  }, []);

  function handleAddPlant(plantObj) {
    // ensure headers casing and price format match tests
    const payload = { ...plantObj, price: String(plantObj.price) };
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(payload),
    })
      .then((r) => r.json())
      .then((newPlant) => {
        setPlants((prev) => [...prev, { ...newPlant, soldOut: false }]);
      })
      .catch((err) => console.error("Failed to add plant:", err));
  }

  function toggleSoldOut(id) {
    setPlants((prev) => prev.map((p) => (p.id === id ? { ...p, soldOut: !p.soldOut } : p)));
  }

  const filteredPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={filteredPlants} onToggleSoldOut={toggleSoldOut} />
    </main>
  );
}
