import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import CTRStatus from "../../shared/CTR.Status";

const DashHistoryContainer = ({ onSearch, histories }) => (
  <section className="dash__static__container dash__history__container">
    <div className="dash__history__action">
      <form className="dash__history__search" onSubmit={onSearch}>
        <input
          type="text"
          name="search"
          id="search"
          className="history__search__bar"
        />
        <BiSearch className="icon" />
      </form>
      <div className="dash__history__filter">
        <figure className="history__filter__icon">
          <BsFilterLeft className="icon" />
          <span>Filter</span>
        </figure>
      </div>
    </div>
    <div className="dash__static__box dash__history__box">
      <div className="dash__history__header">
        <h2 className="dash__history__title">Patient</h2>
        <h2 className="dash__history__title">Heart size</h2>
        <h2 className="dash__history__title">Date</h2>
        <h2 className="dash__history__title">Status</h2>
      </div>
      {histories.map((history) => (
        <Link
          to={"/dash/history/" + history.id}
          className="dash__history__info"
          key={history.id}
        >
          <span className="dash__history__label">{history.patient}</span>
          <span className="dash__history__label">{history.heartSize}</span>
          <span className="dash__history__label">{history.date}</span>
          <CTRStatus ctr={history.ctr} />
        </Link>
      ))}
    </div>
  </section>
);

export default DashHistoryContainer;
