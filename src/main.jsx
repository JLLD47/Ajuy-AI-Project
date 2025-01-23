import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Authors from "./pages/Authors.jsx";
import Card from "./pages/Card.jsx";
import "./index.css";
import Publications from "./components/Author/Publications.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/author" element={<Authors />} />
                <Route path="/author/:id" element={<Card />} />
                <Route path="/publication/:id" element={<Publications />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
