import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    photo: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password } = formData;

    if (!fullName || !email || !password) {
      return setError("All required fields must be filled");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/auth/register",
        formData
      );

      localStorage.setItem("tasteTrailToken", res.data.token);
      toast.success("Registration successful!");

      // Role based redirect
      if (res.data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed");
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
        Create Your TasteTrail Account
      </h2>

      {error && (
        <p className="bg-red-100 text-red-700 p-2 mb-3 rounded text-center">
          {error}
        </p>
      )}

      <input
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
        className="mb-2 w-full p-2 border rounded"
        required
      />

      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        className="mb-2 w-full p-2 border rounded"
        required
      />

      <input
        name="photo"
        placeholder="Profile Photo URL"
        onChange={handleChange}
        className="mb-2 w-full p-2 border rounded"
      />

      {/* Password */}
      <div className="relative mb-3">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          required
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border rounded pr-10"
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
        {loading ? "Creating account..." : "Register"}
      </button>

      <p className="text-center font-semibold mt-3">
        Already have an account?{" "}
        <Link
          className="text-green-700 hover:underline"
          to="/login"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default Registration;