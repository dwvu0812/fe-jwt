import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const handleClickRegister = () => {
    console.log("Register");
    navigate("/register");
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
            />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
            />
            <button className="btn btn-primary">Login</button>
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
