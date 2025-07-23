'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';

export default function Sobre() {
  return (
    <>
      <section
        id="sobre"
        className=" bg-white py-24 px-6 text-white min-h-screen flex flex-col  "
        aria-label="Seção sobre mim"
      >
        <motion.div
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src="/Perfil.jpg"
              alt="Foto de Yan Monteiro"
              className="w-52 h-55 object-cover rounded-full border-4 border-[#006080] shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Texto */}
          <div className="text-left space-y-6 max-w-2xl">
            <h2 className="text-4xl font-poppins font-bold text-[#006080]">Sobre Mim</h2>
            <p className="text-gray-500 text-xl leading-relaxed">
              Me chamo <span className="text-[#006080] font-semibold">Yan Monteiro</span>,
              sou desenvolvedor Full-Stack, com foco em Front-end, apaixonado por tecnologia e criação de interfaces intuitivas.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Desenvolvo interfaces modernas, responsivas e acessíveis utilizando <strong>React</strong>, <strong>Next.js</strong> , <strong>Tailwind CSS</strong>, <strong>JavaScript</strong> e <strong>TypeScript</strong>, sempre com foco em performance e usabilidade.
              Integro soluções completas com tecnologias como <strong>Node.js</strong>,<strong> NestJS</strong>, <strong>MySQL</strong> e <strong>PostgreSQL</strong>.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Busco constantemente evoluir minhas habilidades técnicas e colaborar em projetos que impactem positivamente a vida das pessoas.
            </p>
          </div>
        </motion.div>
        <div className="overflow-hidden w-full">
          <Carousel />
        </div>
      </section>
    </>
  );
}
