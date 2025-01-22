import {useState} from "react";
import {useNavigate} from "react-router-dom";
import pdf from "../../assets/pdf.png"

// eslint-disable-next-line react/prop-types
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
        navigate(`/autores/${id}`);
    };

    const parseAutores = (autoresArray) => {
        try {
            return autoresArray.map((autor) => {
                const corrected = autor
                    .replace(/'/g, '"') // Cambia comillas simples por dobles
                    .replace(/ObjectId\("?(.*?)"?\)/g, '"$1"'); // Elimina ObjectId de manera segura
                return JSON.parse(corrected);
            });
        } catch (error) {
            console.error("Error al parsear autores:", error);
            return [];
        }
    };

    return (
        <section className="p-8 bg-gray-100">
            {/* eslint-disable-next-line react/prop-types */}
            {publications.length > 0 ? (
                    <ul className="space-y-4 max-w-screen-xl mx-auto">
                        {/* eslint-disable-next-line react/prop-types */}
                        {publications.map((pub) => (
                            <li
                                key={pub.id}
                                className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                            >
                                <h3
                                    className="bg-ajuyDark text-white text-xl font-bold p-4 rounded-t-lg cursor-pointer hover:bg-ajuyLight"
                                    onClick={() => toggleExpand(pub.id)}
                                >
                                    {pub.Título}
                                </h3>
                                {expanded[pub.id] && (
                                    <div className="p-4 bg-gray-200 rounded-b-lg text-ajuyDark">Autores:
                                        {parseAutores(pub.Autores).map((aut, index) => (
                                            <div key={index} className="text-green-950">
                                                {aut.Nombre && (
                                                    <p
                                                        onClick={() => redirectToProfile(aut._id)}
                                                        className="text-lg font-bold hover:text-blue-600 cursor-pointer"
                                                    >
                                                        {aut.Nombre}
                                                    </p>
                                                )}
                                            </div>
                                        ))}

                                        {pub.Fecha_de_publicación && (
                                            <>
                                                <h1 className="text-gray-700">Published:</h1>

                                                <h4 className="text-gray-700">{pub.Fecha_de_publicación}</h4></>
                                        )}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                )
                :
                (
                    <p className="text-center text-gray-500">No hay publicaciones disponibles.</p>
                )
            }
        </section>
    )
        ;
};

export default Publications;
