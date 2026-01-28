import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserDashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const [recipes, setRecipes] = useState([]);
  const [planner, setPlanner] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axiosSecure.get("/recipes");
        setRecipes(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchPlanner = async () => {
      try {
        const res = await axiosSecure.get("/planner");
        setPlanner(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipes();
    fetchPlanner();
  }, [axiosSecure]);

  const addToPlanner = async (recipeId) => {
    try {
      await axiosSecure.post("/planner", { recipeId, status: "Planned" });
      setPlanner([...planner, { recipeId, status: "Planned" }]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-green-600">User Dashboard</h2>

      {/* Recipes List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <div key={recipe._id} className="border p-4 rounded shadow">
            <h4 className="font-bold">{recipe.name}</h4>
            <p>Category: {recipe.category}</p>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>Calories: {recipe.calories}</p>
            <button
              onClick={() => addToPlanner(recipe._id)}
              className="mt-2 bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
            >
              Add to Planner
            </button>
          </div>
        ))}
      </div>

      {/* Weekly Planner */}
      <div className="mt-6">
        <h3 className="font-bold mb-2">Weekly Planner</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {planner.map((p, idx) => (
            <div key={idx} className="border p-2 rounded">
              <p>Recipe ID: {p.recipeId}</p>
              <p>Status: {p.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboardHome;