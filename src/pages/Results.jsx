import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import bgImage from "../assets/bg-hero.jpg";

const Results = () => {
    const location = useLocation();
    const { results } = location.state || {};
    const navigate = useNavigate();

    const handleRedirect = (id, tipo) => {
        switch (tipo) {
            case "tesis":
                navigate(`/thesis/${id}`);
                break;
            case "proyecto":
                navigate(`/project/${id}`);
                break;
            case "patentes":
                navigate(`/patent/${id}`);
                break;
            case "publicaciones":
                navigate(`/publication/${id}`);
                break;
            default:
                console.error("Tipo desconocido:", tipo);
        }
    };

    if (!results) {
        return <p>No se encontraron resultados para la búsqueda.</p>;
    }

    return (
        <div className="min-h-screen bg-ajuyBkn bg-gradient-to-b from-ajuyWhite">
            <Header />
            <div
                className="h-[20rem] bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div className="max-w-7xl mx-auto py-6 px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
Search Results
                </h1>

                {results.length === 0 ? (
                    <p className="text-gray-600">No results.</p>
                ) : (

                    <div className="grid grid-cols-1 gap-6">
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
                                    <strong>Tipe:</strong> {result.tipo}
                                </p>
                                <p className="text-sm text-gray-600 mb-2">
                                    <strong>Author:</strong>{" "}
                                    {result.autores.map((autor) => autor.nombre).join(", ")}
                                </p>
                                <button
                                    onClick={() => handleRedirect(result.id, result.tipo)}
                                    className="text-blue-600 text-sm font-medium hover:underline"
                                >
                                    See more.
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Results;
