import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Authors from "./pages/Authors.jsx";
import Card from "./pages/Card.jsx";
import "./index.css";
import {Project} from "./pages/Project.jsx";
import {Publication} from "./pages/Publication.jsx";
import {Thesis} from "./pages/Thesis.jsx";
import {Patent} from "./pages/Patent.jsx";
import {Universities} from "./pages/Universities.jsx";
import Results from "./pages/Results.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/author" element={<Authors />} />
                <Route path="/author/:id" element={<Card />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/publication/:id" element={<Publication />} />
                <Route path="/thesis/:id" element={<Thesis />} />
                <Route path="/patent/:id" element={<Patent />} />
                <Route path="/universities/" element={<Universities />} />
                <Route path="/results/" element={<Results />} />

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
