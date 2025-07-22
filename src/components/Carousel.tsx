'use client';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import {
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiPostgresql,
    SiMysql,
} from 'react-icons/si';

const technologies = [
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-orange-400" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-300" /> },
];

export default function Carousel() {
    const carouselRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const boxWidth = 200; // aprox. largura de cada card com padding e gap
            const totalWidth = technologies.length * boxWidth;

            gsap.to(".carousel-track", {
                x: `-${totalWidth}px`,
                ease: "none",
                duration: 15,
                repeat: -1,
            });
        }, carouselRef);

        return () => ctx.revert(); // limpeza ao desmontar
    }, []);

    return (
        <section className=" text-white py-10 px-4 w-screen" ref={carouselRef}>

            {/* container com overflow oculto */}
            <div className="overflow-hidden w-full h-[150px]">
                {/* track duplicada para loop visual */}
                <div className="flex carousel-track w-max gap-6">
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-2xl min-w-[180px] min-h-20 flex flex-col items-center 
               shadow-md transition-transform"
                        >
                            <div className="text-4xl mb-3">{tech.icon}</div>
                            <h3 className="text-gray-500 font-semibold">{tech.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
