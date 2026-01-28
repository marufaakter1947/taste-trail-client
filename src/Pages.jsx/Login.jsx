import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { AuthContext } from "../Providers/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  // If user is already logged in, redirect
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      return setError("All required fields must be filled");
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/auth/login", formData);

      const userInfo = {
        email,
        photo: res.data.photo || "https://i.ibb.co/2kR1Y0F/default-avatar.png",
        role: res.data.role,
      };

      login(userInfo, res.data.token); // Update context
      toast.success("Login successful");

      // Redirect based on role
      if (res.data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded shadow mt-20 mb-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Login to TasteTrail
      </h2>

      {error && (
        <p className="bg-red-100 text-red-700 p-2 mb-3 rounded text-center">
          {error}
        </p>
      )}

      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        className="mb-2 w-full p-2 border rounded"
        required
      />

      <div className="relative mb-3">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 border rounded pr-10"
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </span>
      </div>

      <button
        disabled={loading}
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <p className="text-center font-semibold mt-3">
        Don't have an account?{" "}
        <Link to="/registration" className="text-green-700 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;