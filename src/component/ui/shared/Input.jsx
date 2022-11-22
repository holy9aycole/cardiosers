import React from "react";

const Input = ({ type, name, id, placeholder, required }) => (
  <div className="input">
    <input
      type={type}
      name={name}
      id={id}
      className="input__entry"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default Input;
