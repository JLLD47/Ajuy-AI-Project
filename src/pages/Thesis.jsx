import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import imgPDF from "../assets/pdf.png";
import bgImage from "../assets/bg-hero.jpg";
import {cleanText, parseAutores} from "../utils.js";

export const Thesis = () => {
    const { id } = useParams();
    const [thesis, setThesis] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();



    const fetchThesis = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/tesis/${id}`);
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            setThesis(data || []);
        } catch (err) {
            console.error("Error fetching thesis:", err);
            setError("Failed to load thesis.");
        }
    };

    const redirectToProfile = (id) => {
        navigate(`/author/${id}`);
    };


    useEffect(() => {
        fetchThesis();
    }, [id]);

    if (error) {
        return (
            <>
                <Header />
                <div className="max-w-4xl mx-auto p-4 bg-red-100 shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold text-red-800 mb-4">Error</h1>
                    <p>{error}</p>
                </div>
            </>
        );
    }

    if (!thesis) {
        return (
            <>
                <Header />
                <div className="max-w-4xl mx-auto p-4 bg-gray-100 shadow-lg rounded-lg">
                    <p>Loading...</p>
                </div>
            </>
        );
    }

    return (
        <><Header />
            <div
                className="h-[20rem] bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>            <div className="bg-ajuyBkn bg-gradient-to-b from-ajuyWhite h-screen flex items-start pt-20">


            <div className="max-w-6xl mx-auto p-4 bg-white shadow-lg rounded-lg">
                <h1 className="text-xl font-bold text-gray-800 mb-4">
                    {thesis.Título || "Sin título"}
                </h1>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <tbody>
                    <tr className="border-b">
                        <td className="font-bold px-4 py-2">Summary</td>
                        <td className="px-4 py-2 break-words">{thesis.Resumen || "No summary"}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-bold px-4 py-2">Date of publication</td>
                        <td className="px-4 py-2">{thesis.Fecha_de_publicación || "Unknown"}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-bold px-4 py-2">Authors</td>
                        <td className="px-4 py-2">
                            <ul>
                                {parseAutores(thesis.Autores).map((aut, index) => (
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
                        <td className="font-bold px-4 py-2">UNESCO</td>
                        <td className="px-4 py-2">{thesis.Clasificación_UNESCO || "Unknown"}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-bold px-4 py-2">Collection</td>
                        <td className="px-4 py-2">{thesis.Colección || "Unknown"}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-bold px-4 py-2">Department</td>
                        <td className="px-4 py-2 break-words">{cleanText(thesis.Departamento) || "Unknown"}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-bold px-4 py-2">Key words</td>
                        <td className="px-4 py-2">{thesis.Palabras_clave || "No keywords"}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-bold px-4 py-2">PDF</td>
                        <td className="px-4 py-2">
                            <a className="text-blue-600" href={thesis.PDF} target="_blank">
                                <img className="h-12 inline" src={imgPDF} alt="pdf logo" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold px-4 py-2">Enlace a la tesis</td>
                        <td className="px-4 py-2">
                            <a className="text-blue-600" href={cleanText(thesis.URI)} target="_blank">
                                Link to the thesis
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
