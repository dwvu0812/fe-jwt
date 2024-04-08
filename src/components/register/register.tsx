import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./register.scss";

const Register = () => {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    console.log("login");
    navigate("/login");
  };
  return (
    <div className="register-container mt-5">
      <div className="container">
        <div className="row">
          <div className="content-left col-7 d-none d-sm-block">
            <div className="brand">Hoi Dan IT</div>
            <div className="detail">Hoi Dan IT helps you ...</div>
          </div>
          <div className="content-right col-12 col-sm-5 py-3 gap-3 flex-column d-flex">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="phoneNumber" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              {/* <Button variant="primary" type="submit">
                Submit
              </Button> */}
            </Form>
            <button className="btn btn-primary">Register</button>
            <hr />
            <button onClick={handleClickLogin} className="btn btn-success">
              Already have an account? Login.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
