import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Letters } from "./Letters";
import { Numbers } from "./Numbers";
import { Header } from "./Header";
import { Footer } from "./Footer";
import reportWebVitals from "./reportWebVitals";
import { Main, AppLayout } from "./index.styles";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="letters" element={<Letters />} />
            <Route path="numbers" element={<Numbers />} />
          </Routes>
        </Main>
        <Footer />
      </AppLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
