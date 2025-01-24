// Updated Profile.jsx
const Profile = ({ author }) => {
    return (
        <section className="p-6 bg-gray-50 rounded-xl shadow-lg w-[90rem]">
            <h1 className="text-4xl font-bold mb-4 text-ajuyLight">
                {author?.Nombre || "Autor no encontrado"}
            </h1>
            <p className="text-lg text-gray-700">
                <strong>Email:</strong> {author?.Email || "Sin email disponible"}
            </p>
        </section>
    );
};

export default Profile;