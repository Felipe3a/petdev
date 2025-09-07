"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  ShieldAlert,
  Phone,
  Cctv,
  SquareUser,
  Columns3Cog,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";

const services = [
  {
    title: "Portões Automaticos",
    description:
      "Na ADR System, oferecemos soluções modernas em portões automáticos que unem segurança, praticidade e durabilidade. Trabalhamos com sistemas de alta qualidade, que garantem mais conforto no seu dia a dia e proteção para o seu patrimônio.",

    icon: <Columns3Cog />,
    linkText:
      "Olá, vi no site sobre Portões Automaticos e gostaria de mais informações.",
  },
  {
    title: "CFTV",
    description:
      "Com os sistemas de CFTV da ADR System, você acompanha tudo o que acontece em tempo real, de onde estiver. Nossas câmeras de segurança oferecem alta definição, confiabilidade e monitoramento contínuo, garantindo mais proteção para sua casa ou empresa.",

    icon: <Cctv />,
    linkText: "Olá, vi no site sobre CFTV e gostaria de mais informações.",
  },
  {
    title: "Alarmes",
    description:
      "Os sistemas de alarmes da ADR System oferecem detecção rápida e precisa contra invasões, garantindo uma resposta imediata para proteger o que realmente importa. Trabalhamos com equipamentos modernos que unem tecnologia, confiança e praticidade, trazendo mais tranquilidade para sua casa ou empresa.",

    icon: <ShieldAlert />,
    linkText: "Olá, vi no site sobre Alarmes e gostaria de mais informações.",
  },
  {
    title: "Controle de Acesso",
    description:
      "Com as soluções de controle de acesso da ADR System, você garante mais segurança e organização no fluxo de pessoas em residências, condomínios e empresas. Nossos sistemas permitem identificação rápida, registros precisos e total praticidade, oferecendo tranquilidade e eficiência no dia a dia.",

    icon: <SquareUser />,
    linkText:
      "Olá, vi no site sobre Controle de Acesso e gostaria de mais informações.",
  },
  {
    title: "Cercas Elétricas",
    description:
      "As cercas elétricas da ADR System oferecem uma camada extra de proteção e segurança para residências e empresas. Com equipamentos modernos e confiáveis, garantimos barreira eficiente contra invasões, aliando tecnologia e tranquilidade para o seu patrimônio.",

    icon: <Zap />,
    linkText: "Olá, vi no site sobre Alarmes e gostaria de mais informações.",
  },
  {
    title: "Interfones",
    description:
      "Os interfones da ADR System proporcionam comunicação segura e prática entre ambientes, seja em residências, condomínios ou empresas. Com tecnologia moderna, nossos sistemas oferecem alta qualidade, garantindo mais controle e conveniência no dia a dia.",

    icon: <Phone />,
    linkText:
      "Olá, vi no site sobre Interfones e gostaria de mais informações.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm"></div>

                      <a
                        target="_blank"
                        href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações sbore ${item.title}`}
                        className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                      >
                        <WhatsappLogo className="w-5 h-5" />
                        Entrar em contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
