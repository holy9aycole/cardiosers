import React from "react";

const Input = ({ type, name, id, placeholder }) => (
  <div className="input">
    <input
      type={type}
      name={name}
      id={id}
      className="input__entry"
      placeholder={placeholder}
    />
  </div>
);

export default Input;
