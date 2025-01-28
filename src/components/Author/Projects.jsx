import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {parseAutores} from "../../utils.js";

const Projects = ({projects}) => {
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

    const redirectToProject = (id) => {
        navigate(`/project/${id}`);
    };


    return (
        <section className="p-6 bg-gray-50 rounded-xl shadow-lg w-[90rem]">
            {projects.length > 0 ? (
                <ul className="space-y-6">
                    {projects.map((project) => (
                        <li
                            key={project.id}
                            className="bg-white border border-gray-300 overflow-hidden shadow hover:shadow-md"
                        >
                            <h3
                                className="bg-ajuyLight text-white text-lg font-semibold p-4 cursor-pointer hover:bg-ajuyMid"
                                onClick={() => toggleExpand(project.id)}
                            >
                                {project.Título}
                            </h3>
                            {expanded[project.id] && (
                                <div className="p-4">
                                    <h4 className="text-gray-700 font-medium">Researchers:</h4>
                                    <ul className="space-y-2">
                                        {parseAutores(project.Investigadores).map((aut, index) => (
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
                                    {project.Fecha_de_inicio && (
                                        <p className="text-gray-600 mt-2">
                                            <strong>Start date:</strong> {project.Fecha_de_inicio}
                                        </p>
                                    )}
                                    <button
                                        onClick={() => redirectToProject(project.id)}
                                        className="mt-4 bg-ajuyMid text-white px-4 py-2 rounded-lg hover:bg-ajuyDark"
                                    >
                                        View project
                                    </button>
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
