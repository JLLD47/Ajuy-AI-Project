// Updated Theses.jsx
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
                    .replace(/'/g, '"')
                    .replace(/ObjectId\("?(.*?)"?\)/g, '"$1"');
                return JSON.parse(corrected);
            });
        } catch (error) {
            console.error("Error parsing authors:", error);
            return [];
        }
    };

    return (
        <section className="p-6 bg-gray-50 rounded-xl shadow-lg w-[90rem]">
            {theses.length > 0 ? (
                <ul className="space-y-6">
                    {theses.map((tesis) => (
                        <li
                            key={tesis.id}
                            className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow hover:shadow-md"
                        >
                            <h3
                                className="bg-ajuyLight text-white text-lg font-semibold p-4 cursor-pointer hover:bg-ajuyMid"
                                onClick={() => toggleExpand(tesis.id)}
                            >
                                {tesis.Título}
                            </h3>
                            {expanded[tesis.id] && (
                                <div className="p-4">
                                    <h4 className="text-gray-700 font-medium">Autores:</h4>
                                    <ul className="space-y-2">
                                        {parseAutores(tesis.Autores).map((autor, index) => (
                                            <li key={index} className="text-blue-800">
                                                <span
                                                    onClick={() => redirectToProfile(autor._id)}
                                                    className="hover:underline cursor-pointer"
                                                >
                                                    {autor.Nombre}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    {tesis.Fecha_de_publicación && (
                                        <p className="text-gray-600 mt-2">
                                            <strong>Fecha de publicación:</strong> {tesis.Fecha_de_publicación}
                                        </p>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">No hay tesis disponibles.</p>
            )}
        </section>
    );
};

export default Theses;