import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../ui/shared/Header";
import Separator from "../ui/shared/Separator";
import AnalyseForm from "../ui/analyse/Analyse.Form";

const Analyse = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    alert("Image Uploaded");

    /* Go to the report page to see the result of the analysis */
    const analyse_id = "123456";
    navigate("/analyse/" + analyse_id);
  };

  return (
    <>
      <Header />
      <Separator />
      <main className="analyse">
        <section className="analyse__container">
          <h2 className="analyse__title">
            Analyse X-Ray Chest for a Cardiomegaly Detection
          </h2>
          <p className="analyse__description">
          A medical tool used by health facilities for the diagnoses  of cardiomegally with the use of digital chest x ray.
          </p>
          <label htmlFor="image" className="analyse__label">
            Upload your digital x-ray chest image, to start the detection
            process:
          </label>
          <AnalyseForm onSubmit={handleSubmit} />
        </section>
      </main>
    </>
  );
};

export default Analyse;
