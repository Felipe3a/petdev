"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import yourLogo from "../../../public/images/Design sem nome (7).png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white text-gray-800 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="#">
            <Image
              src={yourLogo}
              alt="Logo do Site"
              width={180}
              height={45}
              quality={100}
            />
          </Link>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-lg font-semibold">
            <li>
              <a href="#home" className="hover:text-[#E84c3d] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-[#E84c3d] transition-colors">
                Sobre
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-[#E84c3d] transition-colors">
                Serviços
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-[#E84c3d] transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <nav
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 text-xl transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a href="#home" onClick={closeMenu} className="hover:text-[#E84c3d] ">
          Home
        </a>
        <a href="#sobre" onClick={closeMenu} className="hover:text-[#E84c3d]">
          Sobre
        </a>
        <a href="#servicos" onClick={closeMenu} className="hover:text-[#E84c3d]">
          Serviços
        </a>
        <a href="#contato" onClick={closeMenu} className="hover:text-[#E84c3d]">
          Contato
        </a>
      </nav>
    </header>
  );
};

export default Header;
