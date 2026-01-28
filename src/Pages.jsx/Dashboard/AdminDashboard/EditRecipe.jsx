import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axiosSecure.get("/admin/recipes").then(res => {
      const found = res.data.find(r => r._id === id);
      setRecipe(found);
    });
  }, [axiosSecure, id]);

  const handleChange = e => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axiosSecure.put(`/admin/recipes/${id}`, recipe);
    alert("Recipe updated successfully");
    navigate("/dashboard/admin-recipes");
  };

  if (!recipe) return;

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input name="name" value={recipe.name || ""} onChange={handleChange} className="input input-bordered w-full" />
      <input name="category" value={recipe.category || ""} onChange={handleChange} className="input input-bordered w-full" />
      <input name="cuisine" value={recipe.cuisine || ""} onChange={handleChange} className="input input-bordered w-full" />
      <textarea name="instructions" value={recipe.instructions || ""} onChange={handleChange} className="textarea textarea-bordered w-full" />

      <button className="btn btn-primary">Update Recipe</button>
    </form>
  );
};

export default EditRecipe;