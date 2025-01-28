import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import Header from "../components/Header.jsx";
import imgPDF from "../assets/pdf.png";
import bgImage from "../assets/bg-hero.jpg";
import Spinner from "../components/Spinner.jsx";
import {cleanText, parseAutores} from "../utils.js";

export const Publication = () => {
    const {id} = useParams();
    const [publication, setPublication] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchPublication = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/publicaciones/${id}`);
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            setPublication(data || []);
        } catch (err) {
            console.error("Error fetching publication:", err);
            setError("Failed to load publication.");
        }
    };

    useEffect(() => {
        fetchPublication();
    }, [id]);

    if (error) {
        return (
            <>
                <Header/>

                <div className="max-w-4xl mx-auto p-4 bg-red-100 shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold text-red-800 mb-4">Error</h1>
                    <p>{error}</p>
                </div>
            </>
        );
    }

    if (!publication) {
        return (
            <>
                <Header/>
                <div
                    className="h-[20rem] bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >

                </div>
                <div className="bg-ajuyBkn bg-gradient-to-b from-ajuyWhite h-lvh flex items-center justify-center">
                    <Spinner/>
                </div>
            </>
        );
    }

    const redirectToProfile = (id) => {
        navigate(`/author/${id}`);
    };

    return (
        <>
            <Header/>
            <div
                className="h-[20rem] bg-cover bg-center"
                style={{backgroundImage: `url(${bgImage})`}}
            >

            </div>
            <div className="bg-ajuyBkn bg-gradient-to-b from-ajuyWhite h-screen flex items-start pt-20">
                <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
                    <h1 className="text-xl font-bold text-gray-800 mb-4">
                        {publication.Título || "Sin título"}
                    </h1>
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <tbody>
                        <tr className="border-b">
                            <td className="font-bold px-4 py-2">Summary</td>
                            <td className="px-4 py-2">{publication.Resumen || "No summary"}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold px-4 py-2">Date of publication</td>
                            <td className="px-4 py-2">{publication.Fecha_de_publicación || "Unknown"}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold px-4 py-2">Authors</td>
                            <td className="px-4 py-2">
                                <ul>
                                    {parseAutores(publication.Autores).map((aut, index) => (
                                        <li key={index}>
                        <span
                            onClick={() => redirectToProfile(aut._id)}
                            className="hover:underline text-blue-800 cursor-pointer"
                        >
                          {aut.Nombre}
                        </span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold px-4 py-2">DOI</td>
                            <td className="px-4 py-2">{cleanText(publication.DOI) || "Unknown"}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold px-4 py-2">Source</td>
                            <td className="px-4 py-2">{publication.Fuente || "Unknown"}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold px-4 py-2">ISSN</td>
                            <td className="px-4 py-2">{publication.ISSN || "Unknown"}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold px-4 py-2">PDF</td>
                            <td className="px-4 py-2">
                                <a className="text-blue-600" href={cleanText(publication.PDF)} target="_blank">
                                    <img className="h-12 inline" src={imgPDF} alt="pdf logo"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="font-bold px-4 py-2">Link to the publication</td>
                            <td className="px-4 py-2">
                                <a className="text-blue-600" href={cleanText(publication.URI)} target="_blank">
                                    Link to the publication
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
