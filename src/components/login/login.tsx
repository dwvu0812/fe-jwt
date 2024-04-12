import { useNavigate } from "react-router-dom";
import "./login.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import { logInUser } from "../../services/userService";

const Login = () => {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClickRegister = () => {
    console.log("Register");
    navigate("/register");
  };

  const isValidInputs = () => {
    if (!emailPhone || !password) {
      toast("Please fill all fields");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!isValidInputs()) {
      return;
    }
    console.log("handleLogin", emailPhone, password);
    const res = await logInUser({ emailPhone, password });
    if (res) {
      const data = {
        isAuthenticated: true,
        token: "fake-token",
      };
      sessionStorage.setItem("user", JSON.stringify(data));

      toast("Login successfully");
      navigate("/users");
      window.location.reload();
    }
  };

  return (
    <div className="login-container mt-5">
      <div className="container">
        <div className="row">
          <div className="content-left col-7 d-none d-sm-block">
            <div className="brand">Hoi Dan IT</div>
            <div className="detail">Hoi Dan IT helps you ...</div>
          </div>
          <div className="content-right col-12 col-sm-5 py-3 gap-3 flex-column d-flex">
            <input
              className="form-control"
              type="text"
              placeholder="Email or Phone number"
              value={emailPhone}
              onChange={(e) => {
                setEmailPhone(e.target.value);
              }}
            />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
            <a className="text-center">Forgot your password ?</a>
            <hr />
            <button onClick={handleClickRegister} className="btn btn-success">
              Create new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
