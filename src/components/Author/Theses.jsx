import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Theses = ({ theses }) => {
    const [expanded, setExpanded] = useState({});
    const navigate = useNavigate();

    const toggleExpand = (id) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const redirectToProfile = (id) => {
        navigate(`/autores/${id}`);
    };

    const parseAutores = (autoresArray) => {
        try {
            return autoresArray.map((autor) => {
                const corrected = autor
                    .replace(/'/g, '"') // Replace single quotes with double quotes
                    .replace(/ObjectId\("?(.*?)"?\)/g, '"$1"'); // Safely remove ObjectId
                return JSON.parse(corrected);
            });
        } catch (error) {
            console.error("Error parsing authors:", error);
            return [];
        }
    };

    return (
        <section className="p-8 bg-gray-100 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-ajuyDark">Theses</h2>
            {theses.length > 0 ? (
                <ul className="space-y-4 max-w-screen-xl mx-auto">
                    {theses.map((tesis) => (
                        <li
                            key={tesis.id}
                            className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <h3
                                className="bg-ajuyDark text-white text-xl font-bold p-4 rounded-t-lg cursor-pointer hover:bg-ajuyLight"
                                onClick={() => toggleExpand(tesis.id)}
                            >
                                {tesis.Título}
                            </h3>
                            {expanded[tesis.id] && (
                                <div className="p-4 bg-gray-200 rounded-b-lg text-ajuyDark">
                                    <div>
                                        {parseAutores(tesis.Autores).map((autor, index) => (
                                            <div key={index} className="text-green-950">
                                                {autor.Nombre && (
                                                    <p
                                                        onClick={() => redirectToProfile(autor._id)}
                                                        className="text-lg font-bold hover:text-blue-600 cursor-pointer"
                                                    >
                                                        Author: {autor.Nombre}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        {parseAutores(tesis.Director).map((director, index) => (
                                            <div key={index} className="text-green-950">
                                                <p
                                                    onClick={() => redirectToProfile(director._id)}
                                                    className="text-lg font-bold hover:text-blue-600 cursor-pointer"
                                                >
                                                    Supervisor: {director.Nombre}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {tesis.clasificación_UNESCO && (
                                        <h4 className="text-gray-700">
                                            UNESCO Classification: {tesis.clasificación_UNESCO}
                                        </h4>
                                    )}
                                    {tesis.Departamento && (
                                        <h4 className="text-gray-700">Department: {tesis.Departamento}</h4>
                                    )}
                                    {tesis.Fecha_de_publicación && (
                                        <h4 className="text-gray-700">
                                            Publication Date: {tesis.Fecha_de_publicación}
                                        </h4>
                                    )}
                                    {tesis.Resumen && (
                                        <h4 className="text-gray-700">Summary: {tesis.Resumen}</h4>
                                    )}
                                    {tesis.PDF && (
                                        <h4 className="text-gray-700">
                                            PDF:{" "}
                                            <a
                                                href={tesis.PDF}
                                                target="_blank"
                                                className="text-blue-600 hover:underline"
                                            >
                                                View PDF
                                            </a>
                                        </h4>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">No theses available.</p>
            )}
        </section>
    );
};

export default Theses;
