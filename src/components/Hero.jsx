import bgImg from "../assets/bg-hero2.jpg";
import 'animate.css';
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div
            className="bg-cover bg-center bg-opacity-90 min-h-16"
            style={{backgroundImage: `url(${bgImg})`}}
        >
            <section className="text-center py-16 text-white">
                <img
                    src={``}
                    alt=""
                    className="h-40 mx-auto"
                />
                <h1 className="animate__animated animate__backInLeft text-7xl text-ajuyDark font-bold mb-20">The Gateway
                    to the</h1>
                <h2 className="animate__animated animate__backInRight text-9xl font-bold text-white">
                    Unified Knowledge.
                </h2>
                <div className="flex justify-center space-x-8 mt-10">

                    <button onClick={() => navigate(`/universities/`)}
                            className="bg-ajuyLight min-w-48 max-w-48 px-6 py-3 rounded text-ajuyDark text-2xl hover:bg-ajuyWhite hover:text-ajuyMid">
                        Universities
                    </button>

                    <button onClick={() => navigate(`/author/`)}
                            className="bg-ajuyLight min-w-48 max-w-48 px-6 py-3 rounded text-ajuyDark text-2xl hover:bg-ajuyWhite hover:text-ajuyMid">
                        Authors
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Hero;
