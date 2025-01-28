import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logoIcon from "../assets/logo.png";

const Header = ({ isFixed = false }) => {
    const [searchInput, setSearchInput] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        if (e.key === "Enter" && searchInput.trim() !== "") {
            setErrorMessage(null); // Clear any existing error messages
            try {
                const encodedQuery = encodeURIComponent(searchInput.trim());
                const apiUrl = `https://nathan-administrators-rec-gods.trycloudflare.com/nlp-search/?query=${encodedQuery}`;
                console.log("Calling API:", apiUrl);

                const response = await fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });

                if (!response.ok) {
                    throw new Error(`API Error: ${response.statusText}`);
                }

                const contentType = response.headers.get("content-type");
                let data;

                if (contentType && contentType.includes("application/json")) {
                    data = await response.json();
                } else {
                    const textData = await response.text();
                    data = JSON.parse(textData); // Attempt to parse
                }

                navigate("/results", { state: { results: data.resultados, query: searchInput.trim() } });
                console.log("Processed Data:", data);
            } catch (error) {
                console.error("Search Error:", error.message);
                setErrorMessage("An error occurred while fetching results. Please try again.");
            }
        }
    };

    return (
        <header
            className={`my-0 h-4 flex justify-between items-center p-5 bg-ajuyWhite ${
                isFixed ? "fixed w-full top-0 z-50 bg-opacity-80" : ""
            }`}
        >
            <div className="flex items-center space-x-4">
                <img src={logoIcon} alt="Logo" className="h-8" />
                <Link to="/" className="text-xl font-bold text-ajuyDark">
                    AJUY
                </Link>
            </div>

            <nav className="flex-grow flex justify-center space-x-4">
                <div className="flex rounded-full bg-blend-darken items-center space-x-4">
                    <Link to="/" className="text-ajuyMid mx-2 hover:text-ajuyDark">
                        Home
                    </Link>
                    <Link to="/author" className="text-ajuyMid mx-2 hover:text-ajuyDark">
                        Authors
                    </Link>
                    <button className="text-ajuyMid mx-2 hover:text-ajuyDark" aria-label="Contact Us">
                        Contact
                    </button>
                </div>
            </nav>

            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    aria-label="Search"
                    className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-ajuyDark"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={handleSearch}
                />
                {errorMessage && (
                    <span className="text-red-500 text-sm ml-3">{errorMessage}</span>
                )}
            </div>
        </header>
    );
};

export default Header;
