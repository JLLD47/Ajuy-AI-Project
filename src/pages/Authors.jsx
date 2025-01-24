import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import bgImg from "../assets/bg-hero.jpg";



const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    const ITEMS_PER_PAGE = 18;

    const fetchAuthors = async (page) => {
        try {
            const response = await fetch(
                `https://ajuy.onrender.com/autores/?page=${page}&size=${ITEMS_PER_PAGE}`
            );
            const data = await response.json();

            setAuthors(data.items || []);
            setTotalPages(data.pages || Math.ceil(data.total / ITEMS_PER_PAGE));
        } catch (error) {
            console.error("Error al cargar los autores:", error);
        }
    };

    useEffect(() => {
        fetchAuthors(currentPage);
    }, [currentPage]);

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handleAuthorClick = (id) => {
        navigate(`/author/${id}`); //
    };

    return (
        <div className="min-h-screen my-0 bg-ajuyWhite bg-gradient-to-t from-ajuyMid text-black">
            <Header />
            <div
                className="bg-cover bg-center min-h-52 flex flex-col justify-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            ><h1 className="text-4xl text-ajuyMid font-bold p-6">University Researchers</h1></div>

            <div className="grid grid-cols-2 gap-4 mt-16 p-6">
                {authors.map((author, index) => (
                    <div
                        key={author.id || index}
                        className="animate__animated animate__slideInLeft  bg-white p-4 rounded-md flex items-center space-x-4 hover:bg-ajuyDark hover:text-white transition cursor-pointer"
                            onClick={() => handleAuthorClick(author.id)}
                    >
                        <img src={avatar} alt="avatar" className="h-12 w-12 rounded-full" />
                        <div>
                            <h2 className="text-lg text-ajuyDark hover:text-white font-bold">{author.Nombre}</h2>
                            <p className="text-sm text-ajuyDark hover:text-white">{author.Email}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center space-x-4 py-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="bg-gray-700 w-24 px-4 py-2 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-lg">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="bg-gray-700 w-24 px-4 py-2 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Authors;
