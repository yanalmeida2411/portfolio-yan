'use client';
import React, { useEffect, useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <header
            className='fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-md shadow-lg bg-gray-100'
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div
                        onClick={() => scrollToSection('home')}
                        className="flex items-center space-x-3 cursor-pointer"
                        role="link"
                        tabIndex={0}
                        aria-label="Ir para início"
                    >
                        <img
                            src="logo.png"
                            alt="Logo Yan Monteiro"
                            width={50}
                            height={50}
                            className='rounded-full shadow-sm shadow-[#006080]' 
                        />
                        <span className='text-xl lg:text-2xl font-poppins font-semibold select-none
                             text-[#006080] '>
                            Yan Monteiro
                        </span>
                    </div>

                    {/* Nav Desktop */}
                    <nav
                        className="hidden lg:flex items-center space-x-8 mr-12"
                        role="navigation"
                        aria-label="Menu principal"
                    >
                        {['serviços', 'projetos', 'sobre', 'contato'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className='text-lg text-[#006080] hover:text-gray-400 hover:cursor-pointer font-bold'
                                aria-label={`Ir para a seção ${section}`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </button>
                        ))}
                    </nav>

                    {/* CTA Desktop */}
                    <div className="hidden lg:block">
                        <button
                            onClick={() => scrollToSection('contato')}
                            className="bg-[#006080] hover:bg-gray-400 text-white px-7 py-2 rounded-xl font-semibold 
                            shadow-md  transition-transform hover:cursor-pointer"
                        >
                            Entre em Contato
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Alternar menu móvel"
                        aria-expanded={isMenuOpen}
                        className={`lg:hidden p-2  text-[#006080] hover:text-gray-400 transition-colors
                         focus:outline-none rounded hover:cursor-pointer`}
                    >
                        {isMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav
                        className={`lg:hidden absolute left-0 right-0 backdrop-blur-md bg-gray-100 shadow-lg`}
                        role="menu"
                        aria-label="Menu móvel"
                    >
                        <div className="flex flex-col py-4">
                            {['serviços', 'projetos', 'sobre', 'contato'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`px-6 py-4 text-[#006080] hover:text-white hover:bg-gray-400 font-medium transition-colors hover:cursor-pointer `}
                                    role="menuitem"
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            ))}
                            <div className="px-6 py-3 flex justify-center">
                                <button
                                    onClick={() => scrollToSection('contato')}
                                    className="bg-[#006080] hover:bg-gray-400 text-white px-7 py-2 rounded-xl font-semibold 
                            shadow-md  transition-transform hover:cursor-pointer "
                                    aria-label="Começar projeto"
                                >
                                    Entre em Contato
                                </button>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>

    )
}

export default Navbar