import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdAccountCircle } from "react-icons/md";
import { AiOutlineScan } from "react-icons/ai";
import { RiHistoryLine } from "react-icons/ri";
import Logo from "../shared/Logo";

const DashNavigation = () => (
  <nav className="dash__navigation">
    <Logo />
    <div className="dash__navigation__list">
      <NavLink
        to="/dash"
        end
        className={({ isActive }) =>
          isActive ? "dash__navigation__link active" : "dash__navigation__link"
        }
      >
        <MdDashboard className="dash__navigation__icon" />
        <span className="dash__navigation__text">Dashboard</span>
      </NavLink>
      <NavLink
        to="/dash/scan"
        className={({ isActive }) =>
          isActive ? "dash__navigation__link active" : "dash__navigation__link"
        }
      >
        <AiOutlineScan className="dash__navigation__icon" />
        <span className="dash__navigation__text">Scan</span>
      </NavLink>
      <NavLink
        to="/dash/history"
        className={({ isActive }) =>
          isActive ? "dash__navigation__link active" : "dash__navigation__link"
        }
      >
        <RiHistoryLine className="dash__navigation__icon" />
        <span className="dash__navigation__text">History</span>
      </NavLink>
      <NavLink
        to="/dash/account"
        className={({ isActive }) =>
          isActive ? "dash__navigation__link active" : "dash__navigation__link"
        }
      >
        <MdAccountCircle className="dash__navigation__icon" />
        <span className="dash__navigation__text">Account</span>
      </NavLink>
    </div>
  </nav>
);

export default DashNavigation;
