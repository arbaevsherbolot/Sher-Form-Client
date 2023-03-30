import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <div>
      <div className="navbar">
        <div className="links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "link")}>
            Home
          </NavLink>

          <NavLink
            to="/result"
            className={({ isActive }) => (isActive ? "active-link" : "link")}>
            Reply
          </NavLink>
        </div>
      </div>
    </div>
  );
};
