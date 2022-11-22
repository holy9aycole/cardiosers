import React from "react";

const DashContainer = () => (
  <section className="dash__container">
    <div className="dash__container__box">
      <h2 className="dash__container__title">Recent Activities</h2>
      <article className="dash__container__item">
        <figure className="dash__container__figure"></figure>
        <span className="dash__container__patient">Aloezhe Brandone</span>
        <span className="dash__container__time">10:45:16 AM</span>
        <span className="dash__container__result true"></span>
      </article>
      <article className="dash__container__item">
        <figure className="dash__container__figure"></figure>
        <span className="dash__container__patient">Enrique Boriesa</span>
        <span className="dash__container__time">10:45:16 AM</span>
        <span className="dash__container__result true"></span>
      </article>
      <article className="dash__container__item">
        <figure className="dash__container__figure"></figure>
        <span className="dash__container__patient">Nemo nemo</span>
        <span className="dash__container__time">10:45:16 AM</span>
        <span className="dash__container__result false"></span>
      </article>
    </div>
  </section>
);

export default DashContainer;
