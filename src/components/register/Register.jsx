import React, { useState } from "react";
import { Logo } from "../../constants";
import { Input } from "../../ui";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserFailure,
  registerUserStart,
  registerUserSuccess,
} from "../../slice/auth";
import AuthService from "../../service/auth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const { loggedIn } = useSelector((state) => state.auth);
  console.log(isLoading);
  console.log(loggedIn);

  const registerHandler = async(e) => {
    e.preventDefault();
    dispatch(registerUserStart());
    const user = {username:name, email, password}
    try {
      const response = await AuthService.userRegister(user)
      console.log(response);
      console.log(user);
      dispatch(registerUserSuccess());
    } catch (error) {
      dispatch(registerUserFailure());
    }
  };

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form onSubmit={registerHandler}>
          <img className="mb-4" src={Logo} alt="" width="100" height="70" />
          <h1 className="h3 mb-2 fw-normal">Please register</h1>

          <Input label={"UserName"} state={name} setState={setName} />
          <Input
            label={"Email address"}
            type="email"
            state={email}
            setState={setEmail}
          />
          <Input
            label={"Password"}
            type="password"
            state={password}
            setState={setPassword}
          />

          <button
            disabled={isLoading}
            className="w-100 btn btn-lg btn-primary mt-2"
            type="submit"
          >
            {isLoading ? "Loading" : "Register"}
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
      </main>
    </div>
  );
}

export default Register;
