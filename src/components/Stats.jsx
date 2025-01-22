import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const stats = [
    { label: "AUTHORS", value: 3034 },
    { label: "PROJECTS" , value: 1991 },
    { label: "THESES", value: 2335 },
    { label: "PUBLICATIONS", value: 16324 },
    { label: "PATENTS", value: 98 },

];

const Stats = () => {
    const [progressValues, setProgressValues] = useState(stats.map(() => 0));
    useEffect(() => {
        const duration = 3000;
        const startTime = Date.now();

        const animateProgress = () => {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            setProgressValues(
                stats.map((stat) => Math.floor(stat.value * progress))
            );

            if (progress < 1) {
                requestAnimationFrame(animateProgress);
            }
        };

        requestAnimationFrame(animateProgress);
    }, []);

    return (
        <section className="h-[calc(100vh-4rem-40rem)] bg-white  flex justify-center items-center  space-x-20 pt-8">
            {stats.map((stat, index) => (
                <div
                    key={stat.label}
                    className="flex flex-col items-center space-y-3 text-center"
                >
                    <div className="flex w-64 mt-4 h-64 relative">
                        <CircularProgressbar
                            value={progressValues[index]} // Progreso animado
                            maxValue={stat.value} // Valor máximo del círculo
                            styles={buildStyles({
                                pathColor: "#66a5AD", // Color del círculo
                                textColor: "#4CAF50", // Color del texto
                                trailColor: "#C4DFE6", // Color del fondo del círculo
                                pathTransition: "stroke-dashoffset 0.3s linear", // Transición suave
                            })}
                        />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <CountUp
                                start={0}
                                end={stat.value}
                                duration={3}
                                className="text-6xl font-bold text-ajuyMid"
                            />
                        </div>
                    </div>
                    <p className="text-xl text-ajuyDark font-semibold">{stat.label}</p>
                </div>
            ))}
        </section>
    );
};

export default Stats;
