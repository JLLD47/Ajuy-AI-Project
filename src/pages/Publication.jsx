export const Publication = () => {
    return (
        <></>
    )
}
{/* import {useState} from "react";
import {useNavigate} from "react-router-dom";
import pdf from "../../assets/pdf.png"

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
        <section className="p-8 bg-gray-100 min-w-xl">
            {publications.length > 0 ? (
                    <ul className="space-y-4 max-w-screen-xl mx-auto">
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
                                    <div className="p-4 bg-gray-200 rounded-b-lg">
                                        {parseAutores(pub.Autores).map((aut, index) => (
                                            <div key={index} className="text-green-950">
                                                {aut.Nombre && (
                                                    <p
                                                        onClick={() => redirectToProfile(aut._id)}
                                                        className="text-lg font-bold hover:text-blue-600 cursor-pointer"
                                                    >
                                                        Autor: {aut.Nombre}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                        {pub.Clasificación_UNESCO && (
                                            <>
                                                <h1 className="text-gray-700">UNESCO:</h1>
                                                <h4 className="text-gray-700"> {pub.Clasificación_UNESCO}</h4>
                                            </>
                                        )}
                                        {pub.Colección && (
                         const Patents = ({ patents }) => {
    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Patentes</h2>
            {patents.length > 0 ? (
                <ul className="space-y-3">
                    {patents.map((patent) => (
                        <li
                            key={patent.id}
                            className="bg-blue-600 p-4 rounded-md hover:bg-blue-700 transition"
                        >
                            <h3 className="text-xl font-bold">{patent.Título}</h3>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay patentes disponibles.</p>
            )}
        </section>
    );
};

export default Patents;
                   <>
                                                <h1 className="text-gray-700">Collection:</h1>

                                                <h4 className="text-gray-700">{pub.Colección}</h4></>
                                        )}
                                        {pub.DOI && (
                                            <>
                                                <h1 className="text-gray-700">DOI:</h1>

                                                <h4 className="text-gray-700">{pub.DOI}</h4></>
                                        )}
                                        {pub.Fecha_de_publicación && (
                                            <>
                                                <h1 className="text-gray-700">Published:</h1>

                                                <h4 className="text-gray-700">{pub.Fecha_de_publicación}</h4></>
                                        )}
                                        {pub.Fuente && (
                                            <>
                                                <h1 className="text-gray-700">Source:</h1>

                                                <h4 className="text-gray-700">{pub.Fuente}</h4></>
                                        )}
                                        {pub.ISSN && (
                                            <>
                                                <h1 className="text-gray-700"> ISSN:</h1>

                                                <h4 className="text-gray-700">{pub.ISSN}</h4></>
                                        )}
                                        {pub.Palabras_clave && (
                                            <>
                                                <h1 className="text-gray-700"> Key Words:</h1>

                                                <h4 className="text-gray-700">{pub.Palabras_clave}</h4></>
                                        )}
                                        {pub.PDF && (
                                            <>
                                                <h1 className="text-gray-700">PDF:</h1>

                                                <a href={pub.PDF} target="_blank" className="text-gray-700"><img className="h-24" src={pdf}/> </a></>
                                        )}
                                        {pub.Resumen && (
                                            <>
                                                <h1 className="text-gray-700">Summary:</h1>

                                                <h4 className="text-gray-700 max-w-screen-xl">{pub.Resumen}</h4> </>
                                        )}
                                        {pub.URL && (
                                            <>
                                                <h1 className="text-gray-700">URL:</h1>

                                                <h4 className="text-blue-600 hover:underline cursor-pointer">URL: {pub.URL}</h4>
                                            </>
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

export default Publications; */}
