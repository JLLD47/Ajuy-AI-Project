import Header from "../components/Header";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import avatar from "../assets/avatar.png";
import bgImg from "../assets/bg-hero.jpg";
import Spinner from "../components/Spinner.jsx";


const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const ITEMS_PER_PAGE = 32;

    const fetchAuthors = async (page) => {
        setLoading(true)
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/autores/?page=${page}&size=${ITEMS_PER_PAGE}`
            /*https://apiproject-mvb0.onrender.com*/
            );
            const data = await response.json();

            setAuthors(data.items || []);
            setTotalPages(data.pages || Math.ceil(data.total / ITEMS_PER_PAGE));
        } catch (error) {
            console.error("Error al cargar los autores:", error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchAuthors(currentPage);
    }, [currentPage]);

    if (loading) return (
        <>
            <Header/>
            <div
                className="bg-cover bg-center h-[20rem] flex flex-col justify-center"
                style={{backgroundImage: `url(${bgImg})`}}
            ><h1 className="text-4xl text-white font-bold p-6">University Researchers</h1></div>
            <div
                className="w-screen h-screen text-white flex justify-center pt-52 bg-ajuyWhite bg-gradient-to-t from-ajuyLight text-black">

                <Spinner/>
            </div>
        </>);

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
        <div className="min-h-screen my-0 bg-ajuyLight bg-gradient-to-t from-ajuyWhite text-black">
            <Header isFixed={true}/>
            <div
                className="bg-cover bg-center h-[20rem] flex flex-col justify-center"
                style={{backgroundImage: `url(${bgImg})`}}
            ><h1 className="text-4xl text-white font-bold p-6">University Researchers</h1></div>

            <div className="grid grid-cols-2 gap-4 mt-16 p-6">
                {authors.map((author, index) => (
                    <div
                        key={author.id || index}
                        className="animate__animated animate__slideInLeft  bg-white p-4 rounded-md flex items-center space-x-4 hover:bg-ajuyDark hover:text-white transition cursor-pointer"
                        onClick={() => handleAuthorClick(author.id)}
                    >
                        <img src={avatar} alt="avatar" className="h-12 w-12 text-ajuyDark rounded-full hover:bg-ajuyDark hover:text-white"/>
                        <div>
                            <h2 className="text-lg  font-bold">{author.Nombre}</h2>
                            <p className="text-sm ">{author.Email}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center space-x-4 py-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="bg-ajuyDark hover:bg-gray-700 w-24 px-4 py-2 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-lg">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="bg-ajuyDark hover:bg-gray-700 w-24 px-4 py-2 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Authors;
