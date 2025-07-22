'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: "Criação de Sites",
      description: "Sites modernos, rápidos e otimizados para conversão. Perfeitos para empresas e profissionais autônomos.",
      icon: <FaGlobe/>,
    },
    {
      title: "Landing Pages",
      description: "Páginas de alta conversão com foco em campanhas e vendas, adaptadas a qualquer nicho.",
      icon: <FaRocket/>,
    },
    {
      title: "Sistemas Web",
      description: "Aplicações sob medida com painéis administrativos e funcionalidades personalizadas.",
      icon: <FaTools/>,
    },
  ];

  // Variants para animação
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="serviços"
      className="bg-white py-24 px-6 text-[#00BFFF] min-h-screen flex items-center"
      aria-label="Seção de serviços"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-poppins font-bold mb-6"
        >
          Serviços
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 mb-16 max-w-full mx-auto leading-relaxed text-xl"
        >
          Soluções digitais feitas sob medida para destacar sua marca e alavancar seus resultados.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-100 border rounded-3xl shadow-lg hover:shadow-xl transition p-10 space-y-6 cursor-default"
              whileHover={{ scale: 1.07, boxShadow: "0 0px 20px rgba(0,191,255,0.5)" }}
              role="article"
              aria-label={service.title}
            >
              <div className="text-5xl flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#00BFFF] font-poppins">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  );
}

