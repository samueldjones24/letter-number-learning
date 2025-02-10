import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Page } from "./Page";
import { Main, AppLayout } from "./index.styles";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="letters" element={<Page type='letters' />} />
            <Route path="numbers" element={<Page type='numbers' />} />
          </Routes>
        </Main>
        <Footer />
      </AppLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
