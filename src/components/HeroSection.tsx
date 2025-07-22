'use client';
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-6 text-[#374151]"
      aria-label="Seção inicial"
      style={{ animation: 'fadeIn 1s ease forwards' }}
    >
      <img src="/bg-prismas.png" alt="Imagem de fundo" className="absolute inset-0 w-full h-full opacity-15" />
      <div className="max-w-4xl text-center space-y-6 z-10">
        <h1 className="text-5xl md:text-7xl font-poppins font-extrabold leading-tight">
          Olá, eu sou{' '}
          <br />
          <span className="text-[#00BFFF]">Yan Monteiro</span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-400 h-12 md:h-14">
          <Typewriter
            words={[
              'Desenvolvedor Full-Stack',
              'Criador de Interfaces',
              'Apaixonado por Tecnologia',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-[#6B7280] max-w-xl mx-auto leading-relaxed">
          Desenvolvo interfaces modernas, responsivas e acessíveis com React, Next.js e Tailwind CSS,
          integrando soluções completas com Node.js, MySQL, PostgreSQL, JavaScript e TypeScript.
        </p>

        <button 
          onClick={() => scrollToSection('contato')}
          className="inline-block mt-8 bg-[#00BFFF] hover:bg-gray-400 text-white px-10 py-4 rounded-xl text-xl font-semibold shadow-lg transition
          transform focus:outline-none focus:ring-4 focus:ring-[#00BFFF]/80 hover:cursor-pointer"
        >
          Fale comigo
        </button>
      </div>

    </section>

  );
}
