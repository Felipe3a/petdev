"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

// Imports das suas imagens
import slide1 from "../../../public/images/slide01.png";
import slide2 from "../../../public/images/slide02.png";
import slide3 from "../../../public/images/slide03.png";

const slides = [
  {
    image: slide1,
    title: "Automação de Portões com Segurança e Tecnologia",
    description: "Automatize seu portão e tenha mais conforto e proteção no dia a dia.",
    buttonText: "Saiba mais no WhatsApp",
    link: "https://wa.me/5511937112315?text=Olá, gostaria de saber mais sobre Automação"
  },
  {
    image: slide2,
    title: "Mais Conforto para Sua Casa ou Empresa",
    description: "Abra e feche seu portão com apenas um clique no controle.",
    buttonText: "Solicitar Orçamento",
    link: "https://wa.me/5511937112315?text=Olá, gostaria de um orçamento"
  },
  {
    image: slide3,
    title: "Instalação Profissional e Equipamentos de Qualidade",
    description: "Trabalhamos com motores e sistemas confiáveis para sua segurança.",
    buttonText: "Falar com Especialista",
    link: "https://wa.me/5511937112315?text=Olá, gostaria de falar com um especialista"
  }
];

export default function SlideshowAuto() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Definimos o tempo aqui: 8000ms = 8 segundos (ideal para leitura)
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    // Limpar o intervalo ao desmontar o componente ou trocar de slide manualmente
    return () => clearInterval(timer);
  }, [index]); // Adicionar o index aqui ajuda a resetar o timer se a pessoa clicar na bolinha

  return (
    <section className="relative h-[600px] md:h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, i) => {
        const isActive = i === index;
        
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-top"
              priority={i === 0}
              quality={100}
            />
            
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative h-full flex items-center justify-start px-6 md:px-20 lg:px-32">
              <div className="max-w-3xl space-y-6">
                
                {/* Título: Delay menor para aparecer logo */}
                <h2 
                  className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white transition-all duration-700 transform ${
                    isActive ? "translate-x-0 opacity-100 delay-300" : "-translate-x-10 opacity-0"
                  }`}
                >
                  {slide.title}
                </h2>

                {/* Descrição */}
                <p 
                  className={`text-lg md:text-xl text-gray-200 transition-all duration-700 transform ${
                    isActive ? "translate-x-0 opacity-100 delay-500" : "translate-x-10 opacity-0"
                  }`}
                >
                  {slide.description}
                </p>

                {/* Botão */}
                <div 
                  className={`transition-all duration-700 transform ${
                    isActive ? "translate-y-0 opacity-100 delay-700" : "translate-y-10 opacity-0"
                  }`}
                >
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full inline-flex items-center gap-3 transition-all hover:scale-110 shadow-2xl"
                  >
                    <WhatsappLogo size={28} weight="bold" />
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Indicadores */}
      
    </section>
  );
}