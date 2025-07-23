'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      href: 'https://github.com/yanalmeida2411',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin size={24} />,
      href: 'https://www.linkedin.com/in/yanmonteiro88/',
      label: 'LinkedIn',
    },
    {
      icon: <FaEnvelope size={24} />,
      href: 'mailto:yanalmeida2411@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-white text-gray-500 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Yan Monteiro. Todos os direitos reservados.
        </p>

        <div className="flex space-x-6">
          {socialLinks.map(({ icon, href, label }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, color: '#006080' }}
              className="transition-colors text-gray-500"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
