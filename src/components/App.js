import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import Search from "./Search";
const API_URL = "http://localhost:6001/plants";
function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
