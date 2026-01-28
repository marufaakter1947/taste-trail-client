import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

// Axios instance
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecure = () => {
  const { token, logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Attach token automatically to headers
    const reqInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Handle 401/403 responses
    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          // Token expired or invalid, logout user
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptors when component unmounts
    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [token, logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
