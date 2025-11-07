import React from "react";

function NewPlantForm(onAddPlant) {
   const [name, setName] = React.useState("");
    const [image, setImage] = React.useState("");
    const [price, setPrice] = React.useState("");
  function handleSubmit(e) {
        e.preventDefault();
        
        if (!name.trim() || !image.trim() || !price) return;
        const newPlant = {
            name: name.trim(),
            image: image.trim(),
            price: parseFloat(price),
        };
        onAddPlant(newPlant)
        setName("");
        setImage("");
        setPrice("");
    }



  return (
    <div className="new-plant-form">
        <h2>Add a plant</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Plant name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                 <input
                    type="number"
                    name="price"
                    step="0.01"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit">Add Plant</button>
            </form>
    </div>
  );
}

export default NewPlantForm;
