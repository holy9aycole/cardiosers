import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import CTRPercentage from "../../shared/CTR.Percentage";

const DashHistoryContainer = ({ onSearch, histories, filter, setFilter }) => {
  const [show, setShow] = useState(false);

  return (
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
          <figure
            className="history__filter__icon"
            onClick={() => setShow((prev) => !prev)}
          >
            <BsFilterLeft className="icon" />
            {filter ? (
              <span className="history__filter__text">{filter}</span>
            ) : (
              <span className="history__filter__text">Filter</span>
            )}
            <div
              className={
                show
                  ? "history__filter__options show"
                  : "history__filter__options"
              }
            >
              <label
                htmlFor="date"
                className="history__filter__option"
                onClick={() => setFilter("date")}
              >
                Date
              </label>
              <label
                htmlFor="ctr"
                className="history__filter__option"
                onClick={() => setFilter("ctr")}
              >
                CTR
              </label>
              <label
                htmlFor="status"
                className="history__filter__option"
                onClick={() => setFilter("status")}
              >
                Status
              </label>
            </div>
          </figure>
          {filter ? (
            <span
              className="history__filter__exit"
              onClick={() => setFilter(null)}
            >
              X
            </span>
          ) : null}
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
            <CTRPercentage ctr={history.ctr} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DashHistoryContainer;
