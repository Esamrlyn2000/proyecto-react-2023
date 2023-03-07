import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagina404 from "./components/404";
import Cuadricula from "./components/Cuadricula";
import App from "./components/App";
import Saludo from "./components/Saludo";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Cuadricula />} />
          <Route path="saludo" element={<Saludo />} />
        </Route>
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </>
);
