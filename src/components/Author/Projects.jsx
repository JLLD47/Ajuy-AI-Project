import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = ({ projects }) => {
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

    const redirectToProject = (id) => {
        navigate(`/project/${id}`);
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
        <section className="p-8 bg-gray-100 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-ajuyDark">Proyectos</h2>
            {projects.length > 0 ? (
                <ul className="space-y-4 max-w-screen-xl mx-auto">
                    {projects.map((project) => (
                        <li
                            key={project.id}
                            className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            <h3
                                className="bg-ajuyDark text-white text-xl font-bold p-4 rounded-t-lg cursor-pointer hover:bg-ajuyLight"
                                onClick={() => toggleExpand(project.id)}
                            >
                                {project.Título}
                            </h3>
                            {expanded[project.id] && (
                                <div className="p-4 bg-gray-200 rounded-b-lg text-ajuyDark">
                                    <div className="text-ajuyMid"> Researchers:</div>
                                    {parseAutores(project.Investigadores).map((aut, index) => (
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

                                    {project.Fecha_de_inicio && (
                                        <h4 className="text-gray-700">
                                            Fecha de inicio: {project.Fecha_de_inicio}
                                        </h4>
                                    )}

                                    {project.Referencia && (
                                        <h4 className="text-gray-700">Referencia: {project.Referencia}</h4>
                                    )}
                                    {project.Tipo && (
                                        <h4 className="text-gray-700">Tipo: {project.Tipo}</h4>
                                    )}
                                    <svg
                                        onClick={() => redirectToProject(project.id)}
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
                <p className="text-center text-gray-500">No hay proyectos disponibles.</p>
            )}
        </section>
    );
};

export default Projects;
