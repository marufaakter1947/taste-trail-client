// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const EditRecipe = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const axiosSecure = useAxiosSecure();
//   const [recipe, setRecipe] = useState({});

//   useEffect(() => {
//     axiosSecure.get("/admin/recipes").then(res => {
//       const found = res.data.find(r => r._id === id);
//       setRecipe(found);
//     });
//   }, [axiosSecure, id]);

//   const handleChange = e => {
//     setRecipe({ ...recipe, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     await axiosSecure.put(`/admin/recipes/${id}`, recipe);
//     alert("Recipe updated successfully");
//     navigate("/dashboard/admin-recipes");
//   };

//   if (!recipe) return;

//   return (
//     <form onSubmit={handleSubmit} className="space-y-3">
//       <input name="name" value={recipe.name || ""} onChange={handleChange} className="input input-bordered w-full" />
//       <input name="category" value={recipe.category || ""} onChange={handleChange} className="input input-bordered w-full" />
//       <input name="cuisine" value={recipe.cuisine || ""} onChange={handleChange} className="input input-bordered w-full" />
//       <textarea name="instructions" value={recipe.instructions || ""} onChange={handleChange} className="textarea textarea-bordered w-full" />

//       <button className="btn btn-primary">Update Recipe</button>
//     </form>
//   );
// };

// export default EditRecipe;
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    category: "",
    cuisine: "",
    cookingTime: "",
    calories: "",
    image: ""
  });

  useEffect(() => {
    axiosSecure.get(`/recipes/${id}`)
      .then(res => setForm(res.data))
      .catch(err => console.error(err));
  }, [id, axiosSecure]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosSecure.put(`/admin/recipes/${id}`, form);
      toast.success("Recipe updated successfully!");
      navigate("/dashboard/recipes");
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine"
          value={form.cuisine}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="cookingTime"
          placeholder="Cooking Time (mins)"
          value={form.cookingTime}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="calories"
          placeholder="Calories"
          value={form.calories}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={form.ingredients}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={form.instructions}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default EditRecipe;