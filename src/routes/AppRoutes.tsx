import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login/login";
import Register from "../components/register/register";
import PrivateRoute from "./PrivateRoute";
import Users from "../components/manageUsers/users";

const AppRoutes = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route index element={<PrivateRoute>Home</PrivateRoute>} />
        <Route path="/news" element={<PrivateRoute>News</PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute>Contact</PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute>About</PrivateRoute>} />
        <Route
          path="users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
      </Routes>
      {/* </BrowserRouter> */}
      {/* <Routes>
        <Route index element={"Home"} />
        <Route path="news" element={"News"} />
        <Route path="contact" element={"Contact"} />
        <Route path="about" element={"About"} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="users" element={<Users />} />

        <Route path="*" element={"NoMatch"} />
      </Routes> */}
    </>
  );
};

export default AppRoutes;
