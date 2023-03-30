import React from "react";
import "./Wrapper.scss";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";

export const Wrapper = () => {
  return (
    <div className="wrapper__dnrjfhsdurv">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
