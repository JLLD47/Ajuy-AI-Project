import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {parseAutores} from "../../utils.js";

const Publications = ({publications}) => {
    const [expanded, setExpanded] = useState({});
    const navigate = useNavigate();

    const toggleExpand = (id) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const redirectToProfile = (id) => {
        navigate(`/author/${id}`);
    };

    const redirectToPublications = (id) => {
        navigate(`/publication/${id}`);
    };


    return (
        <section className="p-6 bg-gray-50 rounded-xl shadow-lg w-[90rem]">
            {publications.length > 0 ? (
                <ul className="space-y-6">
                    {publications.map((pub) => (
                        <li
                            key={pub.id}
                            className="bg-white border border-gray-300  overflow-hidden shadow hover:shadow-md"
                        >
                            <h3
                                className="bg-ajuyLight text-white text-lg font-semibold p-4 cursor-pointer hover:bg-ajuyMid"
                                onClick={() => toggleExpand(pub.id)}
                            >
                                {pub.Título}
                            </h3>
                            {expanded[pub.id] && (
                                <div className="p-4">
                                    <h4 className="text-gray-700 font-medium">Authors:</h4>
                                    <ul className="space-y-2">
                                        {parseAutores(pub.Autores).map((aut, index) => (
                                            <li key={index} className="text-blue-800">
                                                <span
                                                    onClick={() => redirectToProfile(aut._id)}
                                                    className="hover:underline cursor-pointer"
                                                >
                                                    {aut.Nombre}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    {pub.Fecha_de_publicación && (
                                        <p className="text-gray-600 mt-2">
                                            <strong>Published:</strong> {pub.Fecha_de_publicación}
                                        </p>
                                    )}
                                    <button
                                        onClick={() => redirectToPublications(pub.id)}
                                        className="mt-4 bg-ajuyMid text-white px-4 py-2 rounded-lg hover:bg-ajuyDark"
                                    >
                                        View Publication
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">
                    No hay publicaciones disponibles.
                </p>
            )}
        </section>
    );
};

export default Publications;
