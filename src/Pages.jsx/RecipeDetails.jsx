import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/recipes/${id}`)
      .then(res => setRecipe(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-green-600 mb-4">{recipe.name}</h2>

      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded mb-4"
      />

      <div className="mb-2"><strong>Category:</strong> {recipe.category}</div>
      <div className="mb-2"><strong>Cuisine:</strong> {recipe.cuisine}</div>
      <div className="mb-2"><strong>Cooking Time:</strong> {recipe.cookingTime} mins</div>
      <div className="mb-2"><strong>Calories:</strong> {recipe.calories}</div>
      <div className="mb-2"><strong>Ingredients:</strong> {recipe.ingredients}</div>
      <div className="mb-4"><strong>Instructions:</strong> {recipe.instructions}</div>

      <Link to="/dashboard/recipes" className="btn btn-sm bg-green-500 text-white">
        Back to Recipes
      </Link>
    </div>
  );
};

export default RecipeDetails;