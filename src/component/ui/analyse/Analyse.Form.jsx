import React from "react";

const AnalyseForm = ({ onSubmit }) => (
  <form className="analyse__form" onSubmit={onSubmit}>
    <input
      className="analyse__form__input"
      type="file"
      name="image"
      id="image"
      required
    />
    <button className="analyse__form__button">Analyse</button>
  </form>
);

export default AnalyseForm;
