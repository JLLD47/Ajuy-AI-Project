import { useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";

const Results= () => {
    const location = useLocation();
    const { results } = location.state || {};

    if (!results) {
        return <p>No se encontraron resultados para la búsqueda.</p>;
    }

    return (
        <div className="min-h-screen bg-ajuyBkn bg-gradient-to-b from-ajuyWhite">
            <Header />
            <div className="max-w-7xl mx-auto py-6 px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Resultados de la búsqueda
                </h1>

                {results.length === 0 ? (
                    <p className="text-gray-600">No se encontraron resultados.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {results.map((result) => (
                            <div
                                key={result.id}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200"
                            >
                                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                    {result.titulo}
                                </h2>
                                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                                    {result.resumen}
                                </p>
                                <p className="text-sm text-gray-600 mb-2">
                                    <strong>Tipo:</strong> {result.tipo}
                                </p>
                                <p className="text-sm text-gray-600 mb-2">
                                    <strong>Autores:</strong>{" "}
                                    {result.autores.map((autor) => autor.nombre).join(", ")}
                                </p>
                                {result.palabras_clave && result.palabras_clave.length > 0 ? (
                                    <p className="text-sm text-gray-600 mb-2">
                                        <strong>Palabras clave:</strong>{" "}
                                        {result.palabras_clave.join(", ")}
                                    </p>
                                ) : (
                                    <p className="text-sm text-gray-600 mb-2">
                                        <strong>Palabras clave:</strong> N/A
                                    </p>
                                )}
                                <p className="text-sm text-gray-600 mb-2">
                                    <strong>Fecha de publicación:</strong>{" "}
                                    {result.fecha_publicacion || "Desconocida"}
                                </p>
                                <a
                                    href={result.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 text-sm font-medium hover:underline"
                                >
                                    Ver más
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};


export default Results;
