import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";
import toast from "react-hot-toast";

const ManageRecipes = () => {
  const axiosSecure = useAxiosSecure();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axiosSecure.get("/admin/recipes")
      .then(res => setRecipes(res.data))
      .catch(() => toast.error("Failed to load recipes"));
  }, [axiosSecure]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (!confirm) return;

    try {
      await axiosSecure.delete(`/admin/recipes/${id}`);
      setRecipes(recipes.filter(r => r._id !== id));
      toast.success("Recipe deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Manage Recipes</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map(r => (
          <div key={r._id} className="bg-white shadow rounded p-4">

            <img src={r.image} alt={r.name} className="w-full h-40 object-cover rounded"/>
            <h3 className="text-lg font-semibold mt-2">{r.name}</h3>

            <div className="mt-3 flex gap-2">
              <Link 
                to={`/dashboard/edit-recipe/${r._id}`} 
                className="btn btn-sm btn-info"
              >
                Edit
              </Link>

              <button 
                onClick={() => handleDelete(r._id)} 
                className="btn btn-sm btn-error"
              >
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageRecipes;