import React from "react";
import { Link } from "react-router-dom";
import Input from "../ui/shared/Input";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    console.log({ username, password });
  };

  return (
    <main className="login">
      <h1 className="login__title">Log In</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <div className="login__btn">
          <button className="btn-1 login__btn__login">LogIn</button>
          <Link to="/register" className="login__btn__register">
            Register
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Login;
