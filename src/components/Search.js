import React from "react";

export default function Search({ search, onSearchChange }) {
  return (
    <section className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        id="search"
        type="text"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => {
          if (typeof onSearchChange === "function") onSearchChange(e.target.value);
        }}
      />
    </section>
  );
}