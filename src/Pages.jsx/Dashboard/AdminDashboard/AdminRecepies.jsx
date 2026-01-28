import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AdminRecepies = () => {
  const [recipes, setRecipes] = useState([]);
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

  const fetchRecipes = async () => {
    const res = await axios.get("/api/admin/recipes");
    setRecipes(res.data);
  };

  useEffect(() => { fetchRecipes(); }, []);

  const handleAdd = async () => {
    await axios.post("/api/admin/recipes", {
      ...form,
      ingredients: form.ingredients.split(",")
    });
    toast.success("Recipe added!");
    fetchRecipes();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/admin/recipes/${id}`);
    toast.success("Recipe deleted!");
    fetchRecipes();
  };

  return (
    <div>
      <h2>Admin Recipe Management</h2>
      <input placeholder="Recipe Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Ingredients (comma separated)" onChange={e => setForm({...form, ingredients: e.target.value})} />
      <button onClick={handleAdd}>Add Recipe</button>

      <ul>
        {recipes.map(r => (
          <li key={r._id}>
            {r.name} 
            <button onClick={() => handleDelete(r._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminRecepies;