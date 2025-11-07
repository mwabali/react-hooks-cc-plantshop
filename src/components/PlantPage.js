import React, { useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const API_URL = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setplants] = React.useState([]);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const normalized = data.map(p => ({...p, soldOut: p.soldOut ?? false}));
      setplants(normalized);
    })
    .catch((err) => console.error("Error fetching plants:", err));
  }, []);

  function handleAddPlant(plantObj) {
        
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(plantObj),
        })
            .then((r) => r.json())
            .then((newPlant) => {
                
                setplants((prev) => [...prev, { ...newPlant, soldOut: false }]);
            })
            .catch((err) => console.error("Failed to add plant:", err));
    }

      function toggleSoldOut(id) {

        setplants((prev) =>
            prev.map((p) => (p.id === id ? { ...p, soldOut: !p.soldOut } : p))
        );
    }

     const filteredPlants = plants.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );



  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants} toggleSoldOut={toggleSoldOut} />
    </main>
  );
}

export default PlantPage;
