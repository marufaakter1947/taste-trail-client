import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ReviewApprovals = () => {
  const axiosSecure = useAxiosSecure();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosSecure.get("/reviews")
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  }, [axiosSecure]);

  const approve = (id) => {
    axiosSecure.put(`/reviews/${id}/approve`)
      .then(() => setReviews(prev => prev.map(r => r._id === id ? {...r, status: "approved"} : r)))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Review Approvals</h2>
      {reviews.map(r => (
        <div key={r._id} className="bg-white shadow p-4 rounded mb-3 hover:bg-red-50 transition flex justify-between items-center">
          <div>
            <p className="font-semibold">{r.recipeName}</p>
            <p className="text-gray-700">{r.comment}</p>
            <p className="text-sm text-gray-500">Status: {r.status}</p>
          </div>
          {r.status === "pending" && (
            <button 
              onClick={() => approve(r._id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >Approve</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewApprovals;