import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "../components/navigation/nav";

const PrivateRoute = ({ children }) => {
  const [account, setAccount] = useState<any>({});
  useEffect(() => {
    const session = sessionStorage.getItem("user");
    if (session) {
      setAccount(JSON.parse(session));
    }
  }, []);
  return account ? (
    <>
      <NavBar />
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
