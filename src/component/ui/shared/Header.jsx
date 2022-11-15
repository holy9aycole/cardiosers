import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderLogo from "./Header.Logo";

const Header = () => (
  <header className="header">
    <HeaderLogo />
    <nav className="header__nav">
      <ul className="header__nav__list">
        <li className="header__nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Analyse
          </NavLink>
        </li>
        <li className="header__nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/term"
          >
            Terms of use
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="header__user">
      <Link className="header__user__login" to="/login">
        Log In
      </Link>
      <Link className="header__user__register" to="/register">
        Register
      </Link>
    </div>
  </header>
);

export default Header;
