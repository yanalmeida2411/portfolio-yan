'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projetos = [
    {
      title: "Sistema de Estoque",
      description: "Aplicação web completa com controle de entrada e saída de produtos, login e dashboard interativo.",
      image: "/estoque.png",
      link: "https://seuprojeto.com/estoque",
    },
    {
      title: "Landing Page para Agência",
      description: "Página otimizada para captação de leads, com design moderno e foco em conversão.",
      image: "/auralink.png",
      link: "https://seuprojeto.com/landing",
    },
    {
      title: "Gestão de Pessoal",
      description: "Sistema de gestão de RH com painel administrativo, controle de colaboradores, folha de pagamento e relatórios automatizados.",
      image: "/rh.png",
      link: "https://seuprojeto.com/barbearia",
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projetos" className="bg-white py-20 px-4 text-[#00BFFF] relative z-10">
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
          className="text-gray-400 mb-12 max-w-full mx-auto text-xl"
        >
          Confira alguns dos projetos que desenvolvi, aplicando práticas modernas de UI, performance e acessibilidade.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projetos.map((projeto, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-100 border rounded-3xl shadow-lg hover:shadow-xl transition p-5 space-y-3 cursor-default"
              whileHover={{ scale: 1.05, boxShadow: "0 0px 20px rgba(0,191,255,0.4)" }}
            >
              <img
                src={projeto.image}
                alt={projeto.title}
                className="w-full h-48 object-fill rounded-2xl"
              />
              <div className="p-2 space-y-3">
                <h3 className="text-xl font-semibold text-[#00BFFF]">{projeto.title}</h3>
                <p className="text-gray-500">{projeto.description}</p>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-white bg-[#00BFFF] hover:bg-gray-400 px-4 py-2 rounded-xl transition"
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
