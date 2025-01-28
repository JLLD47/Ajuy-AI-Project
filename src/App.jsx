import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

const App = () => {
    return (
        <div className="bg-white text-black min-h-screen">
            <Header isFixed={false} />
            <main>
                <section>
                    <Hero />
                </section>
                <section className="py-8">
                    <Stats />
                </section>
            </main>
        </div>
    );
};

export default App;


