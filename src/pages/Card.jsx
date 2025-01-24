import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Profile from "../components/Author/Profile";
import Projects from "../components/Author/Projects";
import Publications from "../components/Author/Publications";
import Theses from "../components/Author/Theses";
import Patents from "../components/Author/Patents";
import "../index.css";
import bgImg from "../assets/bg-hero.jpg";

const Card = () => {
    const {id} = useParams();

    const [author, setAuthor] = useState(null);
    const [publications, setPublications] = useState([]);
    const [projects, setProjects] = useState([]);
    const [theses, setTheses] = useState([]);
    const [patents, setPatents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeComponent, setActiveComponent] = useState("Profile");

    const fetchData = async (url, setter, extractFirstItem = false) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (extractFirstItem && !data.items) {
                setter(data);
            } else if (data.items) {
                setter(extractFirstItem ? data.items[0] : data.items);
            } else {
                throw new Error(`La respuesta de ${url} no contiene datos válidos.`);
            }
        } catch (err) {
            console.error(`Error al cargar datos de ${url}:`, err);
            setError(err.message);
        }
    };

    useEffect(() => {
        const fetchAllData = async () => {
            setLoading(true);
            setError(null);

            try {
                await fetchData(`https://ajuy.onrender.com/autores/${id}`, setAuthor, true);
                await Promise.all([
                    fetchData(`https://ajuy.onrender.com/publicaciones/autor/${id}`, setPublications),
                    fetchData(`https://ajuy.onrender.com/proyectos/autor/${id}?page=1&size=50`, setProjects),
                    fetchData(`https://ajuy.onrender.com/tesis/autor/${id}`, setTheses),
                    fetchData(`https://ajuy.onrender.com/patentes/autor/${id}`, setPatents),
                ]);
            } catch (err) {
                setError("Error al cargar los datos. Por favor, intente nuevamente.");
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, [id]);

    if (loading) return <div className="text-white">Cargando...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case "Profile":
                return <Profile author={author}/>;
            case "Projects":
                return <Projects projects={projects}/>;
            case "Publications":
                return <Publications publications={publications}/>;
            case "Theses":
                return <Theses theses={theses}/>;
            case "Patents":
                return <Patents patents={patents}/>;
            default:
                return null;
        }
    };

    return (
        <div className="bg-ajuyWhite">
            <Header/>
            <div className="flex bg-cover bg-center h-60  "
                 style={{backgroundImage: `url(${bgImg})`}}>
                <h1 className=" flex items-center font-bold text-4xl text-white ml-11 my-11"> {author.Nombre}</h1></div>
            <div className="flex flex-col items-center  min-h-screen my-0 bg-ajuyWhite bg-gradient-to-t from-ajuyMid text-white">


                <nav className="mt-10 flex space-x-4 ">
                    <button
                        className={`px-4 py-2 rounded w-[10rem] mb-3.5 ${
                            activeComponent === "Profile" ? "bg-ajuyDark" : "bg-ajuyLight"
                        }`}
                        onClick={() => setActiveComponent("Profile")}
                    >
                        Info
                    </button>
                    <button
                        className={`px-4 py-2 rounded w-[10rem] mb-3.5 ${
                            activeComponent === "Projects" ? "bg-ajuyDark" : "bg-ajuyLight"
                        }`}
                        onClick={() => setActiveComponent("Projects")}
                    >
                        Proyectos
                    </button>
                    <button
                        className={`px-4 py-2 rounded w-[10rem] mb-3.5 ${
                            activeComponent === "Publications" ? "bg-ajuyDark" : "bg-ajuyLight"
                        }`}
                        onClick={() => setActiveComponent("Publications")}
                    >
                        Publicaciones
                    </button>
                    <button
                        className={`px-4 py-2 rounded w-[10rem] mb-3.5 ${
                            activeComponent === "Theses" ? "bg-ajuyDark" : "bg-ajuyLight"
                        }`}
                        onClick={() => setActiveComponent("Theses")}
                    >
                        Tesis
                    </button>
                    <button
                        className={`px-4 py-2 rounded w-[10rem] mb-3.5 ${
                            activeComponent === "Patents" ? "bg-ajuyDark" : "bg-ajuyLight"
                        }`}
                        onClick={() => setActiveComponent("Patents")}
                    >
                        Patentes
                    </button>
                </nav>

                <div className=" flex justify-center">
                    {renderActiveComponent()}
                </div>
            </div>
        </div>
    );
};

export default Card;
