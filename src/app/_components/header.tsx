"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import yourLogo from "../../../public/images/Design sem nome (7).png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lógica de transparência ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueia o scroll do body no mobile
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2 text-gray-800" 
          : "bg-transparent py-4 text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        
        {/* Logo - Adicionei uma leve sombra se for transparente para garantir visibilidade */}
        <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
          <Link href="#">
         <Image
  src={yourLogo}
  alt="Logo ADR System"
  width={160}
  height={40}
  quality={100}
  className={`transition-all duration-300 ease-in-out ${
    !isScrolled 
      ? "brightness-0 invert hover:brightness-100 hover:invert-0" 
      : ""
  }`}
/>
          </Link>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-sm lg:text-base font-bold uppercase tracking-wider">
            <li>
              <a href="#home" className="hover:text-[#E84c3d] transition-colors">Home</a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-[#E84c3d] transition-colors">Sobre</a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-[#E84c3d] transition-colors">Serviços</a>
            </li>
            <li>
              <a href="#contato" className="hover:text-[#E84c3d] transition-colors">Contato</a>
            </li>
          </ul>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none z-50 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} /> : <List size={32} className={!isScrolled ? "text-white" : "text-gray-800"} />}
        </button>
      </div>

      {/* Menu Mobile Fullscreen */}
      <nav
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center space-y-8 text-2xl transition-all duration-500 ease-in-out z-40 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <a href="#home" onClick={closeMenu} className="hover:text-green-400 font-bold transition-colors">Home</a>
        <a href="#sobre" onClick={closeMenu} className="hover:text-green-400 font-bold transition-colors">Sobre</a>
        <a href="#servicos" onClick={closeMenu} className="hover:text-green-400 font-bold transition-colors">Serviços</a>
        <a href="#contato" onClick={closeMenu} className="hover:text-green-400 font-bold transition-colors">Contato</a>
        
        {/* Botão extra no menu mobile */}
        <button onClick={closeMenu} className="mt-4 text-sm text-gray-400 underline uppercase">Fechar Menu</button>
      </nav>
    </header>
  );
};

export default Header;