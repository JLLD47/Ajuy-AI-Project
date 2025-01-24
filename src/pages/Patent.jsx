import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import Header from "../components/Header.jsx";
import imgPDF from "../assets/pdf.png";
import bgImage from "../assets/bg-hero.jpg";

export const Patent = () => {
    const {id} = useParams();
    const [patent, setPatent] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchPatent = async () => {
        try {
            const response = await fetch(`https://ajuy.onrender.com/patentes/${id}`);
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            setPatent(data || []);
        } catch (err) {
            console.error("Error fetching patent:", err);
            setError("Failed to load patent.");
        }
    };

    useEffect(() => {
        fetchPatent();
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

    const parseAutores = (autoresArray) => {
        try {
            return autoresArray.map((autor) => {
                const corrected = autor
                    .replace(/'/g, '"')
                    .replace(/ObjectId\("?(.*?)"?\)/g, '"$1"');
                return JSON.parse(corrected);
            });
        } catch (error) {
            console.error("Error parsing authors:", error);
            return [];
        }
    };

    const redirectToProfile = (id) => {
        navigate(`/author/${id}`);
    };

    if (!patent) {
        return (
            <>
                <Header/>
                <img src={bgImage} className="w-screen max-h-80"></img>

                <div className="max-w-4xl mx-auto p-4 bg-gray-100 shadow-lg rounded-lg">
                    <p>Loading...</p>
                </div>
            </>
        );
    }

    return (
        <>
            <Header/>
            <div className="bg-ajuyBkn bg-gradient-to-b from-ajuyWhite h-screen flex items-start pt-20">
                <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
                    <h1 className="text-xl font-bold text-gray-800 mb-4">
                        {patent.Título || "Sin título"}
                    </h1>
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <tbody>
                        <tr className="border-b">
                            <td className="font-bold px-4 py-2">Summary</td>
                            <td className="px-4 py-2">{patent.Resumen || "No summary"}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold px-4 py-2">Date of publication</td>
                            <td className="px-4 py-2">{patent.Fecha_de_publicación || "Unknown"}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold px-4 py-2">Authors</td>
                            <td className="px-4 py-2">
                                <ul>
                                    {parseAutores(patent.Autores).map((aut, index) => (
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
                            <td className="font-bold px-4 py-2">PDF</td>
                            <td className="px-4 py-2">
                                <a className="text-blue-600" href={patent.PDF} target="_blank">
                                    <img className="h-12 inline" src={imgPDF} alt="pdf logo"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="font-bold px-4 py-2">Enlace a la patente</td>
                            <td className="px-4 py-2">
                                <a className="text-blue-600" href={patent.URI} target="_blank">
                                    Link to the patent
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