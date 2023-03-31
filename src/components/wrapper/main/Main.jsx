import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Form } from "../../pages/Form";
import { News } from "../../pages/News";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Form />} path="/registration" />
        <Route element={<News />} path="/news" />
      </Routes>
    </>
  );
};
