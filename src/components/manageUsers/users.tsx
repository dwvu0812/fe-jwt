import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const session = sessionStorage.getItem("user");
    if (!session) {
      navigate("/login");
    }
  }, [navigate]);

  return <div>Users</div>;
};

export default Users;
