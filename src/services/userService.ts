import axios from "axios";

const registerUser = async (data) => {
  // axios
  //   .post("http://localhost:8080/api/v1/register", data)
  //   .then((res) => {
  //     console.log(">>> check data axios: ", res);
  //   })
  //   .catch((err) => {
  //     console.log(">>> check error axios: ", err);
  //   });
  const { email, phone, username, password } = data;
  return await axios.post("http://localhost:8080/api/v1/register", {
    email,
    phone,
    username,
    password,
  });
};

const logInUser = async (data) => {
  const { emailPhone, password } = data;
  return await axios.post("http://localhost:8080/api/v1/login", {
    emailPhone,
    password,
  });
};

export { registerUser, logInUser };
