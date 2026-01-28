import { useEffect, useState } from "react";
import axios from "axios";

const useRole = (email) => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (!email) return;

    axios
      .get(`http://localhost:5000/users/role?email=${email}`)
      .then((res) => {
        // from backend response
        if (res.data.role) setRole(res.data.role);
      })
      .catch((err) => console.error("Error fetching role:", err));
  }, [email]);

  return role;
};

export default useRole;

