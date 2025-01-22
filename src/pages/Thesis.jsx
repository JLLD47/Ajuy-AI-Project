{/*
import {useNavigate} from "react-router-dom";


const Theses = ({theses}) => {

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
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Tesis</h2>
            {theses.length > 0 ? (
                <ul className="space-y-3">
                    {theses.map((tesis) => (
                        <li
                            key={tesis.id}
                            className="bg-blue-600 p-4 rounded-md hover:bg-blue-700 transition"
                        >
                            <h3 className="text-xl font-bold">{tesis.Título}</h3>
                            <div className="mt-2">
                                {parseAutores(tesis.Autores).map((aut, index) => (
                                    <div key={index} className="text-green-950">
                                        { aut.Autores && <p onClick={() => redirectToProfile(aut._id)}
                                             className="text-lg font-bold hover:bg-sky-700">Autor: {aut.Autores}</p>}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-2">
                                {parseAutores(tesis.Director).map((aut, index) => (
                                    <div key={index} className="text-green-950">
                                        <p onClick={() => redirectToProfile(aut._id)}
                                           className="text-lg font-bold hover:bg-sky-700">Director: {aut.Nombre}</p>
                                    </div>
                                ))}
                            </div>
                            {tesis.clasificación_UNESCO && <h3>Clasificación UNESCO: {tesis.Clasificación_UNESCO}</h3>}
                            {tesis.Colección && <h3>Colección: {tesis.Colección}</h3>}
                            {tesis.Departamento && <h3>Departamento: {tesis.Departamento}</h3>}
                            {tesis.Fecha_de_publicación && <h3>Fecha de publicación{tesis.Fecha_de_publicación}</h3>}
                            {tesis.Descripción && <h3>Fuente: {tesis.Descripción}</h3>}
                            {tesis.ISSN && <h3>ISSN: {tesis.ISSN}</h3>}
                            {tesis.Palabras_clave && <h3>Palabras clave: {tesis.Palabras_clave}</h3>}
                            {tesis.PDF && <h3>PDF: {tesis.PDF}</h3>}
                            {tesis.Resumen && <h3 className="text-2xl text-accent">Resumen: {tesis.Resumen}</h3>}
                            {tesis.PDF && <h3><a href={tesis.PDF} target="_blank">Link</a></h3>}


                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay tesis disponibles.</p>
            )}
        </section>
    );
};

export default Theses;

*/}
