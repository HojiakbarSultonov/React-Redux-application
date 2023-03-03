import React, { useState } from "react";
import { Logo } from "../../constants";
import { Input } from "../../ui";
import { useDispatch, useSelector } from "react-redux";
import {ValidationError} from '../'
import {
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "../../slice/auth";
import AuthService from "../../service/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password };
    try {
      const response = await AuthService.userLogin(user);
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form onSubmit={loginHandler}>
          <img className="mb-4" src={Logo} alt="" width="100" height="70" />
          <h1 className="h3 mb-2 fw-normal">Please login</h1>
            <ValidationError/>
          <Input label={"Email address"} state={email} setState={setEmail} />
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
            {isLoading ? "Loading" : "Login"}
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
      </main>
    </div>
  );
}

export default Login;
