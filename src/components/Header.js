import { NavLink } from "react-router-dom";
import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(nav) => (nav.isActive ? classes.active : "")}
              to="/users"
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(nav) => (nav.isActive ? classes.active : "")}
              to="/userform"
            >
              UserForm
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
