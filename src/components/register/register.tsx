import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./register.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { registerUser } from "../../services/userService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const handleClickLogin = () => {
    console.log("login");
    navigate("/login");
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/test-api").then((data) => {
      console.log(">>> check data axios: ", data);
    });
  }, []);

  const isValidInputs = () => {
    if (!email || !phone || !username || !password || !confirmPassword) {
      toast("Please fill all fields");
      return false;
    }

    if (password !== confirmPassword) {
      toast("Password and confirm password do not match");
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    console.log("handleRegister");
    if (!isValidInputs()) {
      return;
    }
    const data = {
      email,
      phone,
      username,
      password,
    };
    try {
      const response = await registerUser(data);
      console.log(">>> check data axios: ", response);
      if (response.status === 200) {
        toast(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
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
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="phoneNumber"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="User name"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </Form.Group>

              {/* <Button variant="primary" type="submit">
                Submit
              </Button> */}
            </Form>
            <button
              className="btn btn-primary"
              onClick={() => {
                handleRegister();
              }}
            >
              Register
            </button>
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
