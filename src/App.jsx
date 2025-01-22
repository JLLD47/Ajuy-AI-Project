import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

const App = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            <Hero />
            <Stats />
        </div>
    );
};

export default App;

