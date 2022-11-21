import React from "react";
import { Link } from "react-router-dom";
import Input from "../ui/shared/Input";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    console.log({ username, password });
  };

  return (
    <main className="login">
      <h1 className="login__title">Register</h1>
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
        <Input
          type="password"
          name="password-2"
          id="password-2"
          placeholder="Repeat password"
        />
        <div className="login__btn">
          <button className="btn-1 login__btn__login">Register</button>
          <Link to="/login" className="login__btn__register">
            Login
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Register;
