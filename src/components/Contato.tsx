'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Contato() {
  return (
    <section
      id="contato"
      className="bg-white py-24 px-6 text-white min-h-screen flex items-center relative z-0"
      aria-label="Seção de contato"
    >
      <img src="/bg-mar.png" alt="Imagem de fundo" className="reverse absolute inset-0 w-full h-full opacity-40 -z-1 " />
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-poppins font-bold mb-6 text-[#006080]">Entre em Contato</h2>
        <p className="text-gray-500 mb-12 leading-relaxed text-xl">
          Tem um projeto em mente ou quer conversar? Envie uma mensagem!
        </p>

        <form
          action="https://formsubmit.co/yanalmeida2411@gmail.com"
          method="POST"
          className="space-y-8 text-left"
        >
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid md:grid-cols-2 gap-8">
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              className="w-full p-5 rounded-3xl shadow-md bg-white border border-gray-400 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#006080] transition"
              aria-label="Nome"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              required
              className="w-full p-5 rounded-3xl shadow-md bg-white border border-gray-400 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#006080] transition"
              aria-label="Email"
            />
          </div>

          <textarea
            name="mensagem"
            placeholder="Escreva sua mensagem..."
            required
            className="w-full p-5 rounded-3xl shadow-md bg-white border border-gray-400 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#006080] transition resize-none min-h-[140px]"
            aria-label="Mensagem"
          />

          <button
            type="submit"
            className="bg-[#006080] hover:bg-gray-400 text-white hover:cursor-pointer px-8 py-4 rounded-xl transition shadow-lg font-semibold focus:outline-none focus:ring-4 focus:ring-[#00BFFF]/90"
            aria-label="Enviar mensagem"
          >
            Enviar Mensagem
          </button>
        </form>
      </motion.div>
    </section>

  );
}
