import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import homeSvg from "../../../assets/home.svg";
import newsSvg from "../../../assets/news.svg";
import regSvg from "../../../assets/reg.svg";

export const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "link")}>
            <img src={homeSvg} alt="svg" />
          </NavLink>

          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? "active-link" : "link")}>
            <img src={newsSvg} alt="svg" />
          </NavLink>

          <NavLink
            to="/registration"
            className={({ isActive }) => (isActive ? "active-link" : "link")}>
            <img src={regSvg} alt="svg" />
          </NavLink>
        </div>
      </div>
    </>
  );
};
