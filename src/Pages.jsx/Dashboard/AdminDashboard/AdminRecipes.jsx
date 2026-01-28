import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";

const AdminRecipes = () => {
  const axiosSecure = useAxiosSecure();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axiosSecure.get("/admin/recipes").then(res => {
      setRecipes(res.data);
    });
  }, [axiosSecure]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    await axiosSecure.delete(`/admin/recipes/${id}`);
    setRecipes(recipes.filter(r => r._id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-600 text-center mb-4">Recipe Management</h2>

      {recipes.map(recipe => (
  <div
    key={recipe._id}
    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border p-2 mb-4 rounded-lg shadow-sm"
  >
    {/* Image */}
    <img
      src={recipe.image}
      alt={recipe.name}
      className="w-full sm:w-22 h-22 object-cover rounded"
    />

    {/* Middle info */}
    <div className="flex-1">
      <h3 className="font-semibold text-lg mb-2">{recipe.name}</h3>

      <Link
        to={`/recipes/${recipe._id}`}
        className="btn btn-sm bg-green-300 hover:bg-green-600"
      >
        View Details
      </Link>
    </div>

    {/* Actions */}
    <div className="flex gap-2 self-end sm:self-auto">
      <Link
        to={`/dashboard/edit-recipe/${recipe._id}`}
        className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Edit
      </Link>

      <button
        onClick={() => handleDelete(recipe._id)}
        className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </div>
))}
    </div>
  );
};

export default AdminRecipes;