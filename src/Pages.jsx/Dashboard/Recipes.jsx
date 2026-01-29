import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/recipes")
      .then(res => setRecipes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">Browse All Available Recipes</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map(r => (
          <div key={r._id} className="bg-white shadow rounded p-4">

            <img src={r.image} alt={r.name} className="w-full h-40 object-cover rounded"/>
            <h3 className="text-lg font-semibold mt-2">{r.name}</h3>
            <p className="text-gray-500 mt-1">Category: {r.category}</p>
            <p className="text-gray-500">Cuisine: {r.cuisine}</p>

            <div className="mt-3">
              <Link 
                to= {`/recipes/${r._id}`}
                className="btn btn-sm  w-full bg-green-300 hover:bg-green-600"
              >
                View Details
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;