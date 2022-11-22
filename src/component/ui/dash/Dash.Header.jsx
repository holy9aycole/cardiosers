import React from "react";
import { IoIosNotifications } from "react-icons/io";

const DashHeader = ({ username, time }) => (
  <header className="dash__header">
    <div className="dash__header__profile">
      <h2 className="dash__header__username">Hello, {username}</h2>
      <span className="dash__header__time">{time}</span>
    </div>
    <figure className="dash__header__icon">
      <IoIosNotifications className="header__icon__notification" />
    </figure>
  </header>
);

export default DashHeader;
