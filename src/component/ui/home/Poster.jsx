import React from "react";
import { Link } from "react-router-dom";

const Poster = () => (
  <div className="poster">
    <div className="poster__info">
      <h1 className="poster___title">For Private Clinics and medical center</h1>
      <span className="poster__text">
      Cardiosers is webapplication which is used as a  medical tool  by health facilities for the diagnoses  
      of cardiomegally with the use of digital chest x ray.This platform will ease the analyses and detection of Cardiiomegally 
      from digital chest x-ray.
      </span>
      <Link to="/dash" className="poster__btn">
        Get Started
      </Link>
    </div>
  </div>
);

export default Poster;
