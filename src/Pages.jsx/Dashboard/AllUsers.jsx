import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosSecure.get("/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, [axiosSecure]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4">All Users</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-green-100">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id} className="border-b hover:bg-green-50">
              <td className="p-2">{u.fullName}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.role}</td>
              <td className="p-2">{new Date(u.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;