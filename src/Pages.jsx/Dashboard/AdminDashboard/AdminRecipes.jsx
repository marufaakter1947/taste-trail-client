// import { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const AdminRecepies = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     ingredients: "",
//     instructions: "",
//     category: "",
//     cuisine: "",
//     cookingTime: "",
//     calories: "",
//     image: ""
//   });

//   const fetchRecipes = async () => {
//     const res = await axios.get("/api/admin/recipes");
//     setRecipes(res.data);
//   };

//   useEffect(() => { fetchRecipes(); }, []);

//   const handleAdd = async () => {
//     await axios.post("/api/admin/recipes", {
//       ...form,
//       ingredients: form.ingredients.split(",")
//     });
//     toast.success("Recipe added!");
//     fetchRecipes();
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`/api/admin/recipes/${id}`);
//     toast.success("Recipe deleted!");
//     fetchRecipes();
//   };

//   return (
//     <div>
//       <h2>Admin Recipe Management</h2>
//       <input placeholder="Recipe Name" onChange={e => setForm({...form, name: e.target.value})} />
//       <input placeholder="Ingredients (comma separated)" onChange={e => setForm({...form, ingredients: e.target.value})} />
//       <button onClick={handleAdd}>Add Recipe</button>

//       <ul>
//         {recipes.map(r => (
//           <li key={r._id}>
//             {r.name} 
//             <button onClick={() => handleDelete(r._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminRecepies;
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
      <h2 className="text-2xl font-bold mb-4">Recipe Management</h2>

      {recipes.map(recipe => (
        <div key={recipe._id} className="border p-3 mb-3 rounded">
          <h3 className="font-semibold">{recipe.name}</h3>

          <div className="flex gap-3 mt-2">
            <Link
              to={`/dashboard/edit-recipe/${recipe._id}`}
              className="btn btn-sm btn-info"
            >
              Edit
            </Link>

            <button
              onClick={() => handleDelete(recipe._id)}
              className="btn btn-sm btn-error"
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