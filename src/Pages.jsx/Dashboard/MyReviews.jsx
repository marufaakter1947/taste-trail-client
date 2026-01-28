import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/reviews?userId=${user._id}`)
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  }, [user]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-4">My Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews submitted yet.</p>
      ) : (
        reviews.map(r => (
          <div key={r._id} className="bg-white shadow p-4 rounded mb-3 hover:bg-red-50 transition">
            <p className="font-semibold">{r.recipeName}</p>
            <p className="text-gray-600">Rating: {r.rating}/5</p>
            <p className="text-gray-700">{r.comment}</p>
            <p className="text-sm text-gray-500">Status: {r.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyReviews;