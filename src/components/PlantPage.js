import React, { useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const API_URL = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setplants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const normalized = data.map(p => ({...p, soldOut: p.soldOut ?? false}));
      setplants(normalized);
    })
    .catch((err) => console.error("Error fetching plants:", err));
  }, []);

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList /> 
    </main>
  );
}

export default PlantPage;
