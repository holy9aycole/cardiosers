import React from "react";

const DashContainer = () => (
  <section className="dash__static__container">
    <div className="dash__static__box">
      <h2 className="dash__static__title">Recent Activities</h2>
      <article className="dash__static__item">
        <figure className="dash__static__figure"></figure>
        <span className="dash__static__patient">Aloezhe Brandone</span>
        <span className="dash__static__time">10:45:16 AM</span>
        <span className="dash__static__result true"></span>
      </article>
      <article className="dash__static__item">
        <figure className="dash__static__figure"></figure>
        <span className="dash__static__patient">Enrique Boriesa</span>
        <span className="dash__static__time">10:45:16 AM</span>
        <span className="dash__static__result true"></span>
      </article>
      <article className="dash__static__item">
        <figure className="dash__static__figure"></figure>
        <span className="dash__static__patient">Nemo nemo</span>
        <span className="dash__static__time">10:45:16 AM</span>
        <span className="dash__static__result false"></span>
      </article>
    </div>
  </section>
);

export default DashContainer;
