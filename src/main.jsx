import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Authors from "./pages/Authors.jsx";
import Card from "./pages/Card.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/autores" element={<Authors />} />
                <Route path="/autores/:id" element={<Card />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
