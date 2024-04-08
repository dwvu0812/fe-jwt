import { Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/navigation/nav";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route index element={"Home"} />
        <Route path="news" element={"News"} />
        <Route path="contact" element={"Contact"} />
        <Route path="about" element={"About"} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="*" element={"NoMatch"} />
      </Routes>
    </>
  );
}

export default App;
