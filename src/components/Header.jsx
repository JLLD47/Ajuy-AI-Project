import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import logoIcon from "../assets/logo.png";

const Header = () => {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    function cleanApiResponse(data) {
        const cleanedResults = data.resultados.map((resultado) => {
            return {
                id: resultado.id,
                titulo: resultado.titulo,
                tipo: resultado.tipo,
                resumen: resultado.resumen.replace(/\r\n/g, ' ').trim(),
                autores: resultado.autores.map((autor) => ({
                    id: autor.id.replace(/ \(.*?\)/g, ''), // Limpia "Link: ..." del ID
                    nombre: autor.nombre
                })),
                score: resultado.score,
                relevancia: resultado.relevancia,
                palabras_clave: resultado.palabras_clave || [], // Asegura que siempre sea un array
                fecha_publicacion: resultado.fecha_publicacion,
                url: resultado.url.split(' ')[0] // Limpia "Link: ..." para quedarse solo con la URL
            };
        });

        return {
            total: data.total,
            resultados: cleanedResults,
            tiempo_busqueda: data.tiempo_busqueda,
            consulta_procesada: data.consulta_procesada
        };
    }

    const handleSearch = async (e) => {
        if (e.key === "Enter" && searchInput.trim() !== "") {
            try {
                const encodedQuery = encodeURIComponent(searchInput.trim());
                const apiUrl = `https://grab-lauren-gotten-type.trycloudflare.com/search/?query=${encodedQuery}`;
                console.log("Llamando a la API:", apiUrl);

                const response = await fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });

                const contentType = response.headers.get("content-type");

                let data;
                if (contentType && contentType.includes("application/json")) {
                    data = await response.json();
                    navigate("/results", { state: { results: data.resultados, query: searchInput.trim() } });
                } else {
                    const textData = await response.text();
                    try {
                        data = JSON.parse(textData); // Intentar parsear el texto como JSON
                    } catch (error) {
                        console.error("Error al convertir texto a JSON:", textData);
                        throw new Error("La respuesta no es un JSON válido.");
                    }
                }

                console.log("Datos procesados:", data);
            } catch (error) {
                console.error("Error al buscar datos:", error.message);
            }
        }
    };







    return (
        <header className="my-0 h-4 flex justify-between items-center p-5 bg-ajuyWhite">
            <div className="flex items-center space-x-4">
                <img
                    src={logoIcon}
                    alt="logotemporal"
                    className="h-8"
                />
                <Link to="/" className="text-xl font-bold text-ajuyDark">AJUY</Link>
            </div>

            <nav className="flex-grow flex justify-center space-x-4">
                <div className="flex rounded-full bg-blend-darken items-center space-x-4">
                    <Link to="/" className="text-ajuyMid mx-2 hover:text-ajuyDark">
                        Home
                    </Link>
                    <Link to="/author" className="text-ajuyMid mx-2 hover:text-ajuyDark">
                        Authors
                    </Link>
                    <button className="text-ajuyMid mx-2 hover:text-ajuyDark">Contact</button>
                </div>
            </nav>

            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-ajuyDark"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={handleSearch}
                />
            </div>
        </header>
    );
};

export default Header;
