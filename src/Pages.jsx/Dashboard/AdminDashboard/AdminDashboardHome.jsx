import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    category: "",
    cuisine: "",
    cookingTime: "",
    calories: "",
    image: "",
  });

  // Fetch recipes & categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipesRes = await axiosSecure.get("/admin/recipes");
        setRecipes(recipesRes.data);

        const categoriesRes = await axiosSecure.get("/admin/categories");
        setCategories(categoriesRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [axiosSecure]);

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleCreateRecipe = async () => {
    try {
      await axiosSecure.post("/admin/recipes", newRecipe);
      toast.success("Recipe created!");
      setNewRecipe({
        name: "",
        ingredients: "",
        instructions: "",
        category: "",
        cuisine: "",
        cookingTime: "",
        calories: "",
        image: "",
      });
    } catch (err) {
      toast.error("Failed to create recipe");
    }
  };

  const handleDeleteRecipe = async (id) => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    try {
      await axiosSecure.delete(`/admin/recipes/${id}`);
      toast.success("Recipe deleted!");
      setRecipes(recipes.filter(r => r._id !== id));
    } catch (err) {
      toast.error("Failed to delete recipe");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-green-600">Admin Dashboard</h2>

      {/* Create Recipe */}
      <div className="bg-white shadow rounded p-6 space-y-2">
        <h3 className="font-bold">Create New Recipe</h3>
        <input
          name="name"
          placeholder="Recipe Name"
          value={newRecipe.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          value={newRecipe.ingredients}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="instructions"
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          name="category"
          value={newRecipe.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat._id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
        <input
          name="cuisine"
          placeholder="Cuisine"
          value={newRecipe.cuisine}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="cookingTime"
          placeholder="Cooking Time (minutes)"
          value={newRecipe.cookingTime}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="calories"
          placeholder="Calories"
          value={newRecipe.calories}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="image"
          placeholder="Image URL"
          value={newRecipe.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleCreateRecipe}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Create Recipe
        </button>
      </div>

      {/* Recipes List */}
      <div className="bg-white shadow rounded p-6">
        <h3 className="font-bold mb-4">All Recipes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recipes.map(recipe => (
            <div key={recipe._id} className="border p-4 rounded shadow">
              <h4 className="font-bold">{recipe.name}</h4>
              <p>Category: {recipe.category}</p>
              <p>Cuisine: {recipe.cuisine}</p>
              <p>Calories: {recipe.calories}</p>
              <button
                onClick={() => handleDeleteRecipe(recipe._id)}
                className="mt-2 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;