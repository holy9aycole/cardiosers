import React from "react";
import CTRStatus from "../../shared/CTR.Status";

const DashReportContainer = ({
  ctr /* ctr (???) */,
  status /* status of the condition */,
  heartSize,
  image,
  fullname,
  email,
  phone,
  dateOfBirth,
}) => {
  return (
    <section className="dash__static__container dash__report__container">
      <div className="dash__static__box dash__report__box">
        <h2 className="dash__report__title">
          Result for the X-Ray Chest Analysis
        </h2>
        <div className="dash__report__item">
          <figure className="dash__report__image">
            <img src={image} alt="" />
          </figure>
          <div className="dash__report__info">
            <CTRStatus ctr={ctr} status={status} />
            <div className="dash__report__heart-size">
              Heart size of {heartSize} in
            </div>
          </div>
        </div>
        <h2 className="dash__report__title">Personal Information</h2>
        <div className="dash__report__item">
          <div className="dash__report__info">
            <div className="dash__report__data">
              <span className="report__data__key">Fullname:</span>
              <span className="report__data__span">{fullname}</span>
            </div>
            <div className="dash__report__data">
              <span className="report__data__key">Email:</span>
              <span className="report__data__span">{email}</span>
            </div>
            <div className="dash__report__data">
              <span className="report__data__key">Phone: </span>
              <span className="report__data__span">{phone}</span>
            </div>
            <div className="dash__report__data">
              <span className="report__data__key">Date of Birth:</span>
              <span className="report__data__span">{dateOfBirth}</span>
            </div>
          </div>
        </div>
        <button className="dash__report__btn">Eliminar</button>
      </div>
    </section>
  );
};

export default DashReportContainer;
