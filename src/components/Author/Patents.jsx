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
        <section className="p-8 bg-gray-100 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-ajuyDark">Patents</h2>
            {patents.length > 0 ? (
                <ul className="space-y-4 max-w-screen-xl mx-auto">
                    {patents.map((patent) => (
                        <li
                            key={patent.id}
                            className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <h3
                                className="bg-ajuyDark text-white text-xl font-bold p-4 rounded-t-lg cursor-pointer hover:bg-ajuyLight"
                                onClick={() => toggleExpand(patent.id)}
                            >
                                {patent.Título}
                            </h3>
                            {expanded[patent.id] && (
                                <div className="p-4 bg-gray-200 rounded-b-lg text-ajuyDark">
                                    {patent.Descripción && (
                                        <p className="text-gray-700 mb-2">Description: {patent.Descripción}</p>
                                    )}
                                    {patent.Inventores && (
                                        <p className="text-gray-700 mb-2">
                                            Inventors: {patent.Inventores.join(", ")}
                                        </p>
                                    )}
                                    {patent.Fecha_de_publicación && (
                                        <p className="text-gray-700 mb-2">
                                            Publication Date: {patent.Fecha_de_publicación}
                                        </p>
                                    )}
                                    <svg
                                        onClick={() => redirectToPatent(patent.id)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 mt-2 cursor-pointer hover:text-blue-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">No patents available.</p>
            )}
        </section>
    );
};

export default Patents;
