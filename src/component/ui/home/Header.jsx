import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "header__nav__link active" : "header__nav__link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "header__nav__link active" : "header__nav__link"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/analyse"
        className={({ isActive }) =>
          isActive ? "header__nav__link active" : "header__nav__link"
        }
      >
        Analyse
      </NavLink>
      <NavLink
        to="/faq"
        className={({ isActive }) =>
          isActive ? "header__nav__link active" : "header__nav__link"
        }
      >
        FAQ
      </NavLink>
    </nav>
    <div className="header__sign">
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "header__sign__link active" : "header__sign__link"
        }
      >
        Log In
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? "header__sign__link active" : "header__sign__link"
        }
      >
        Register
      </NavLink>
    </div>
  </header>
);

export default Header;
