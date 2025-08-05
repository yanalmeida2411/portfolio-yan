'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projetos = [
    {
      title: "MyBlog",
      description: "Um espaço para desenvolvedores publicarem artigos, tutoriais e dicas, ajudando a comunidade a crescer através do compartilhamento de conhecimento.",
      image: "/myblog.png",
      link: "https://mynetblog.netlify.app/",
    },
    {
      title: "Landing Page",
      description: "Página otimizada para captação de leads, com design moderno e foco em conversão.",
      image: "/auralink.png",
      link: "https://auralinkforweb.netlify.app/",
    },
    {
      title: "Plataforma Educagil",
      description: "Plataforma de ensino online com área para alunos e professores. Ainda estamos em construção",
      image: "/educagil.png",
      link: "https://testeducaagil.netlify.app",
    },
  ];


  return (
    <section id="projetos" className="bg-white py-20 px-4 text-[#006080] relative z-10">
      <img src="/bg-mar.png" alt="Imagem de fundo" className="absolute inset-0 w-full h-full opacity-40 -z-1" />
      
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Últimos Projetos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-500 mb-12 max-w-full mx-auto text-xl"
        >
          Confira alguns dos projetos que desenvolvi, aplicando práticas modernas de UI, performance e acessibilidade.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projetos.map((projeto, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 border rounded-3xl shadow-lg hover:shadow-xl transition p-5 space-y-3 cursor-default"
              whileHover={{ scale: 0.99, boxShadow: "0 0px 20px #006080 inset" }}
            >
              <img
                src={projeto.image}
                alt={projeto.title}
                className="w-full h-48 object-fill rounded-2xl"
              />
              <div className="p-2 space-y-3">
                <h3 className="text-xl font-semibold text-[#006080]">{projeto.title}</h3>
                <p className="text-gray-500">{projeto.description}</p>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-white bg-[#006080] hover:bg-gray-400 px-4 py-2 rounded-xl transition"
                >
                  Ver Projeto
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
