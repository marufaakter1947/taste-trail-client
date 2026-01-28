import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import AdminDashboardHome from "./Admin/AdminDashboardHome";
import UserDashboardHome from "./User/UserDashboardHome";
import LoadingSpinner from "../../Component/Shared/LoadingSpinner";
import { Navigate } from "react-router";

const DashboardIndex = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (loading) return;
    if (!user?.email) return;

    const fetchRole = async () => {
      try {
        const res = await axiosSecure.get(`/users/role?email=${user.email}`);
        if (res.data.role) setRole(res.data.role);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch user role");
      }
    };

    fetchRole();
  }, [axiosSecure, user, loading]);

  if (loading) return <div className="p-6"><LoadingSpinner /></div>;
  if (!user) return <Navigate to="/login" replace />;
  if (!role) return <div className="p-6"><LoadingSpinner /></div>;

  return role === "admin" ? <AdminDashboardHome /> : <UserDashboardHome />;
};

export default DashboardIndex;