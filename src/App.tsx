import { Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/navigation/nav";
import Login from "./components/login/login";
import Register from "./components/register/register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Users from "./components/manageUsers/users";
import { useEffect, useState } from "react";
import _ from "lodash";

function App() {
  const [account, setAccount] = useState<any>({});
  useEffect(() => {
    const session = sessionStorage.getItem("user");
    if (session) {
      setAccount(JSON.parse(session));
    }
  }, []);
  return (
    <>
      {account && !_.isEmpty(account) && account.isAuthenticated && <NavBar />}
      <Routes>
        <Route index element={"Home"} />
        <Route path="news" element={"News"} />
        <Route path="contact" element={"Contact"} />
        <Route path="about" element={"About"} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="users" element={<Users />} />

        <Route path="*" element={"NoMatch"} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
