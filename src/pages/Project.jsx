export const Project = () => {
    return (
        <></>
    )
}
{/*
import {useNavigate} from "react-router-dom";

const Projects = ({projects}) => {

    const navigate = useNavigate();
    const redirectToProfile = (id) => {
        navigate(`/autores/${id}`);
    }

    const parseAutores = (autoresArray) => {
        try {
            return autoresArray.map((autor) => {
                console.log("String original:", autor);
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
        <section>
            <h2 className="text-2xl font-bold mb-4">Proyectos</h2>
            {projects.length > 0 ? (
                <ul className="space-y-3">
                    {projects.map((project) => (
                        <li
                            key={project.id}
                            className="bg-blue-600 p-4 rounded-md hover:bg-blue-700 transition"
                        >
                            <h3 className="text-xl font-bold">{project.Título}</h3>
                            <div className="mt-2">
                                {parseAutores(project.Investigadores).map((aut, index) => (
                                    <div key={index} className="text-green-950">
                                        {aut.Nombre && <p onClick={() => redirectToProfile(aut._id)}
                                           className="text-lg font-bold">Investigador: {aut.Nombre}</p> }
                                    </div>
                                ))}
                            </div>
                            {project.Fecha_de_inicio &&
                                <h4 className="text-xl font-bold">Fecha de inicio: {project.Fecha_de_inicio}</h4>}
                            {project.organismo_financiador && <h4 className="text-xl font-bold">Organismo
                                Financiador: {project.organismo_financiador}</h4>}
                            {project.Referencia &&
                                <h4 className="text-xl font-bold">Referencia {project.Referencia}</h4>}
                            {project.Tipo && <h4 className="text-xl font-bold">Tipo: {project.Tipo}</h4>}
                            {project.URL_del_proyecto &&
                                <h4 className="text-xl font-bold">URL: {project.URL_del_proyecto}</h4>}

                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay proyectos disponibles.</p>
            )}
        </section>
    );
};

export default Projects;
*/}