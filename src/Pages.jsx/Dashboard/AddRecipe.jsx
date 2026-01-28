import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddRecipe = () => {
  const axiosSecure = useAxiosSecure();
  const [form, setForm] = useState({
    name: "", ingredients: "", instructions: "", category: "", cuisine: "", cookingTime: "", calories: "", image: ""
  });

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {...form, ingredients: form.ingredients.split(",")};
    axiosSecure.post("/admin/recipes", payload)
      .then(res => alert("Recipe added!"))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">Add a New Recipe</h2>
      <form className="space-y-3" onSubmit={handleSubmit}>
        {Object.keys(form).map(key => (
          <input 
            key={key}
            type="text" 
            name={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={form[key]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ))}
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;