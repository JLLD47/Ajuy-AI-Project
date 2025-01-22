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
