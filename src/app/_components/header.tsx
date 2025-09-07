"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

// Importe seu logo aqui. O caminho será relativo à sua pasta 'public'.
import yourLogo from "../../../public/images/Design sem nome (7).png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu mobile
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white text-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-2 md:p-3">
        {/* Logo do Site */}
        <div className=" flex-shrink-0">
          <Link href="/">
            <Image
              src={yourLogo}
              alt="Logo do Site"
              width={180} // Diminua a largura do logo
              height={45} // Ajuste a altura proporcionalmente
              quality={100}
            />
          </Link>
        </div>

        {/* Menu de Navegação - Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-lg font-semibold">
            <li>
              <Link href="/" className="hover:text-[#E84c3d] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="hover:text-[#E84c3d] transition-colors"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/servicos"
                className="hover:text-[#E84c3d] transition-colors"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="hover:text-[#E84c3d] transition-colors"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão do Menu - Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none z-30"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <nav
        className={`md:hidden absolute w-full bg-white transition-transform duration-300 ease-in-out z-20 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-semibold border-t border-gray-200">
          <li>
            <Link
              onClick={closeMenu}
              href="/"
              className="hover:text-[#E84c3d] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              href="/sobre"
              className="hover:text-[#E84c3d] transition-colors"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              href="/servicos"
              className="hover:text-[#E84c3d] transition-colors"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              href="/contato"
              className="hover:text-[#E84c3d] transition-colors"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
