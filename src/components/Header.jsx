import {Link} from "react-router-dom";
import logoIcon from "../assets/logo.png";

const Header = () => {
    return (
        <header className="my-0 h-4 flex justify-between items-center p-5 bg-ajuyWhite">
            <div className="flex items-center space-x-4">
                <img
                    src={logoIcon} alt="logotemporal"
                    className="h-8"
                />
                <Link to="/" className="text-xl font-bold text-ajuyDark">AJUY</Link>
            </div>

            <nav className="flex-grow flex justify-center space-x-4">
                <div className="flex   rounded-full bg-blend-darken items-center space-x-4">
                    <Link to="/" className="text-ajuyMid mx-2 hover:text-ajuyDark">
                        Home
                    </Link>
                    <Link to="/autores" className="text-ajuyMid mx-2 hover:text-ajuyDark">
                        Authors
                    </Link>
                    <button className="text-ajuyMid mx-2 hover:text-ajuyDark">Contact</button>
                </div>
            </nav>

            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ajuyDark"
                />
            </div>
        </header>
    );
};

export default Header;

