import "./login.scss";

const Login = () => {
  return (
    <div className="login-container mt-3">
      <div className="container">
        <div className="row">
          <div className="content-left col-7">
            <div className="brand">Hoi Dan IT</div>
            <div className="detail">Hoi Dan IT helps you ...</div>
          </div>
          <div className="content-right col-5 py-3 gap-3 flex-column d-flex">
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
            <p>Forgot your password ?</p>
            <hr />
            <button className="btn btn-success">Create new account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
