import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Result } from "../../pages/Result";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Result />} path="/result" />
      </Routes>
    </div>
  );
};
