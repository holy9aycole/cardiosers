import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../ui/shared/Header";
import Separator from "../ui/shared/Separator";
import AnalyseForm from "../ui/analyse/Analyse.Form";

const Report = () => {
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
      <main className="analyse report">
        <section className="analyse__container">
          <h2 className="analyse__title">
            Analyse X-Ray Chest for a Cardiomegaly Detection
          </h2>
          <label htmlFor="image" className="analyse__label">
            Upload your digital x-ray chest image, to start the detection
            process:
          </label>
          <AnalyseForm onSubmit={handleSubmit} />
          <h3 className="report__title">Result for the X-Ray Chest Analysis</h3>
          <div className="report__principal">
            <figure className="report__principal__image">
              <img src="" alt="" />
            </figure>
            <div className="report__principal__info">
              <div className="report__principal__percentage">
                <div className="principal__percentage__progress">
                  <div className="principal__percentage__value">96%</div>
                </div>
                <span className="report__principal__text">
                  of Cardiomegaly detected
                </span>
              </div>
              <div className="report__principal__heart-size">
                2.5in of heart size
              </div>
              <div className="report__principal__heart-size">
                and other stuff
              </div>
            </div>
          </div>
          <h3 className="report__title">Result for the X-Ray Chest Analysis</h3>
          <div className="report__principal__info">
            <div className="report__principal__heart-size">
              2.5in of heart size
            </div>
            <div className="report__principal__heart-size">and other stuff</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Report;
