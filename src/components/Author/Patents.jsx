import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Patents = ({ patents }) => {
    const [expanded, setExpanded] = useState({});
    const navigate = useNavigate();

    const toggleExpand = (id) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const redirectToPatent = (id) => {
        navigate(`/patent/${id}`);
    };

    return (
        <section className="p-6 bg-gray-50 rounded-xl shadow-lg w-[90rem]">
            {patents.length > 0 ? (
                <ul className="space-y-6">
                    {patents.map((patent) => (
                        <li
                            key={patent.id}
                            className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow hover:shadow-md"
                        >
                            <h3
                                className="bg-ajuyLight text-white text-lg font-semibold p-4 cursor-pointer hover:bg-ajuyMid"
                                onClick={() => toggleExpand(patent.id)}
                            >
                                {patent.Título}
                            </h3>
                            {expanded[patent.id] && (
                                <div className="p-4">
                                    {patent.Descripción && (
                                        <p className="text-gray-700 mb-2">{patent.Descripción}</p>
                                    )}
                                    {patent.Inventores && (
                                        <p className="text-gray-700 mb-2">
                                            <strong>Inventores:</strong> {patent.Inventores.join(", ")}
                                        </p>
                                    )}
                                    {patent.Fecha_de_publicación && (
                                        <p className="text-gray-600 mt-2">
                                            <strong>Fecha de publicación:</strong> {patent.Fecha_de_publicación}
                                        </p>
                                    )}
                                    <button
                                        onClick={() => redirectToPatent(patent.id)}
                                        className="mt-4 bg-ajuyMid text-white px-4 py-2 rounded-lg hover:bg-ajuyDark"
                                    >
                                        Ver patente
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">No hay patentes disponibles.</p>
            )}
        </section>
    );
};

export default Patents;






