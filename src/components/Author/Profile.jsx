const Profile = ({ author }) => {
    return (
        <section className="mb-8">
            <h1 className="text-4xl font-bold mb-6">{author?.Nombre || "Autor no encontrado"}</h1>
            <p className="text-lg mb-6">Email: {author?.Email || "Sin email disponible"}</p>
        </section>
    );
};

export default Profile;
